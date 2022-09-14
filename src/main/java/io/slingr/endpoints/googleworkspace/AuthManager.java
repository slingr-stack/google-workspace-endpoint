package io.slingr.endpoints.googleworkspace;

import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.interfaces.RSAPrivateKey;
import java.security.spec.InvalidKeySpecException;
import java.util.Date;
import java.util.List;

import javax.ws.rs.core.Form;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import io.slingr.endpoints.googleworkspace.utils.PKConverter;
import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.datastores.DataStore;
import io.slingr.endpoints.services.rest.RestClient;
import io.slingr.endpoints.utils.Json;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AuthManager {
    private static PrivateKey privateKey;
    private HttpService httpService;
    private DataStore dataStore;
    private String accessToken;
    private String serviceAccountEmail; 
    private String adminEmail; 
    private String scopes;
    private static final Logger logger = LoggerFactory.getLogger(GoogleWorkspaceEndpoint.class);

    public static final String DATA_STORE = "googleAccessToken";
    public static final String LAST_TOKEN = "_LAST_TOKEN";
    public static final String TOKEN_DURATION = "tokenDuration";
    public static final String ACCESS_TOKEN = "accessToken";
    public static final String ID = "_id";
    public static final String TIMESTAMP = "timestamp";
    public static final String GOOGLE_AUTH_URL = "https://oauth2.googleapis.com/token";

    public AuthManager(String privateKey, DataStore dataStore, String serviceAccountEmail, String adminEmail, List<String> scopes, HttpService httpService) throws NoSuchAlgorithmException, InvalidKeySpecException {
        AuthManager.privateKey = PKConverter.setPrivateKey(privateKey);
        this.serviceAccountEmail = serviceAccountEmail;
        this.adminEmail = adminEmail;
        this.scopes = setOauthScopes(scopes);
        this.httpService = httpService;
        this.dataStore = dataStore;
        removeAccessTokenFromDataStore();
    }
    

    private String generateJWT(PrivateKey privateKey, String serviceAccountEmail, String adminEmail, String scopes) {
        long now = System.currentTimeMillis();
        Algorithm algorithm = Algorithm.RSA256(null, (RSAPrivateKey) privateKey);
        return JWT.create()
        .withIssuer(serviceAccountEmail)
        .withSubject(adminEmail)
        .withClaim("scope", scopes)
        .withAudience(GOOGLE_AUTH_URL)
        .withExpiresAt(new Date(now + 60 * 1000L)) // 60 seconds duration
        .withIssuedAt(new Date(now))
        .sign(algorithm);
    }

    public String getToken() {
        return this.accessToken;
    }
    
    public void setUpTokenInRequests() {
        httpService.setupBearerAuthenticationHeader(getToken());
        httpService.setupDefaultHeader("Content-Type", "application/json");
    }

    private Json getLastToken() {
        try {
            return this.dataStore.findById(LAST_TOKEN);
        } catch (Exception ex) {
            return null;
        }
    }

    public void setLastToken() {
        Json lastToken = this.getLastToken();
        Long lastTokenTime = (System.currentTimeMillis() - (lastToken.isEmpty() ? 0 : lastToken.longInteger(TIMESTAMP))) / 1000L;
        if (lastToken.isEmpty() || lastTokenTime > (lastToken.isEmpty() ? 3599 : Integer.parseInt(lastToken.string(TOKEN_DURATION)))) { 
            logger.info("Generating JWT....");
            String jwt = generateJWT(AuthManager.privateKey, this.serviceAccountEmail, this.adminEmail, this.scopes);
            logger.info("JWT generated succesfully!");
            Form formBody = new Form().param("grant_type", "urn:ietf:params:oauth:grant-type:jwt-bearer").param("assertion", jwt);
            try {
                Json accessTokenResponse = RestClient.builder(GOOGLE_AUTH_URL)
                .header("Content-Type", "application/x-www-form-urlencoded")
                .post(formBody);
                logger.info("Access token retrieved from JWT!");
                saveAccessTokenInDataStore(accessTokenResponse.string("access_token"),accessTokenResponse.string("expires_in"));
                this.accessToken = accessTokenResponse.string("access_token");
            } catch (Exception e) {
                logger.error("An error occurred while trying to get the access token, check the given OAuth scopes", e);
            }
        } else {
            this.accessToken = lastToken.string(ACCESS_TOKEN);
            logger.info("Token retrieved from DataStore...");
        }
    }

    public void removeAccessTokenFromDataStore() {
        dataStore.removeById(AuthManager.LAST_TOKEN);
    }

    public void saveAccessTokenInDataStore(String accessToken,String expirationTime) {
        Json newToken = Json.map()
        .set(ACCESS_TOKEN, accessToken)
        .set(TIMESTAMP, System.currentTimeMillis())
        .set(TOKEN_DURATION, expirationTime)
        .set(ID, LAST_TOKEN);
        this.dataStore.save(newToken);
    }
    
    private String setOauthScopes(List<String> scopes) {
        //the needed scopes must be joined with a space character (' ') in order to pass it to the JWT about to be generated
        String authUrlSnippet = "https://www.googleapis.com/auth/admin.";
        for (int i = 0; i < scopes.size(); i++) {
            scopes.set(i, authUrlSnippet + scopes.get(i));
        }
        return String.join(" ",scopes);
    }   
}
