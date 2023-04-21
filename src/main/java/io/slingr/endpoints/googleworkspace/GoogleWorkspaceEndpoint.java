package io.slingr.endpoints.googleworkspace;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.datastores.DataStore;
import io.slingr.endpoints.services.rest.RestClient;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.core.Form;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.interfaces.RSAPrivateKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;
import java.util.Date;
import java.util.List;

@SlingrEndpoint(name = "googleworkspace", functionPrefix = "_")
public class GoogleWorkspaceEndpoint extends HttpEndpoint {

    private static final Logger logger = LoggerFactory.getLogger(GoogleWorkspaceEndpoint.class);
    private static final String API_URL = "https://admin.googleapis.com/admin";

    @EndpointProperty
    private String serviceAccountEmail;

    @EndpointDataStore
    private DataStore googleAccessToken;

    @ApplicationLogger
    private AppLogs appLogs;

    @EndpointConfiguration
    private Json configuration;

    @Override
    public String getApiUri() {
        return API_URL;
    }

    private PrivateKey privateKey;
    private String scopes;

    private String accessToken;
    public static final String LAST_TOKEN = "_LAST_TOKEN";
    public static final String TOKEN_DURATION = "tokenDuration";
    public static final String ACCESS_TOKEN = "accessToken";
    public static final String ID = "_id";
    public static final String TIMESTAMP = "timestamp";
    public static final String GOOGLE_AUTH_URL = "https://oauth2.googleapis.com/token";
    public static final String AUTH_URL_SNIPPET = "https://www.googleapis.com/auth/admin.";

    @Override
    public void endpointStarted() {
        try {
            appLogs.info("Setting access token on endpoint start....");

            String privateKey = this.configuration.string("privateKey");
            List<String> scopes = this.configuration.strings("authScopes");

            try {
                String privateKeyContent = privateKey.replaceAll("\\n", "").replace("-----BEGIN PRIVATE KEY-----", "").replace("-----END PRIVATE KEY-----", "");
                PKCS8EncodedKeySpec keySpecPKCS8 = new PKCS8EncodedKeySpec(Base64.getDecoder().decode(privateKeyContent));
                KeyFactory kf = KeyFactory.getInstance("RSA");
                this.privateKey = kf.generatePrivate(keySpecPKCS8);
            }
            catch (Exception e) { appLogs.error("An error occurred while generating the private key ", e); }

            //the needed scopes must be joined with a space character (' ') in order to pass it to the JWT about to be generated
            scopes.replaceAll(s -> AUTH_URL_SNIPPET + s);
            this.scopes = String.join(" ",scopes);
            try { googleAccessToken.removeById(LAST_TOKEN); }
            finally { setAccessToken(); }

            appLogs.info("Access token successfully set up on endpoint start....");
        } catch (Exception e) {
            appLogs.error("An error occurred while setting the access token ", e);
        }
    }

    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) {
        try { return defaultGetRequest(request); }
        catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                setAccessToken();
                return defaultGetRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        try{ return defaultPostRequest(request); }
        catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                setAccessToken();
                return defaultPostRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_put")
    public Json put(FunctionRequest request) {
        try { return defaultPutRequest(request); }
        catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                setAccessToken();
                return defaultPutRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_delete")
    public Json delete(FunctionRequest request) {
        try { return defaultDeleteRequest(request); }
        catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                setAccessToken();
                return defaultDeleteRequest(request);
            }
            throw restException;
        }
    }

    private boolean checkInvalidTokenError(Exception e) {
        if (e instanceof EndpointException) {
            EndpointException restException = (EndpointException) e;
            if (restException.getCode() != null) logger.error("Status Code: "+ restException.getReturnCode());
            return restException.getReturnCode() == 401;
        }
        return false;
    }

    public void setAccessToken() {
        appLogs.info("Generating JWT....");
        long now = System.currentTimeMillis();
        Algorithm algorithm = Algorithm.RSA256(null, (RSAPrivateKey) this.privateKey);
        String jwt =  JWT.create()
                .withIssuer(this.serviceAccountEmail)
                .withClaim("scope", this.scopes)
                .withAudience(GOOGLE_AUTH_URL)
                .withExpiresAt(new Date(now + 60 * 1000L)) // 60 seconds duration
                .withIssuedAt(new Date(now))
                .sign(algorithm);
        appLogs.info("JWT generated successfully!");
        Form formBody = new Form().param("grant_type", "urn:ietf:params:oauth:grant-type:jwt-bearer").param("assertion", jwt);
        try {
            Json accessTokenResponse = RestClient.builder(GOOGLE_AUTH_URL)
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .post(formBody);
            appLogs.info("Access token retrieved from JWT!");
            Json newToken = Json.map()
                    .set(ACCESS_TOKEN, accessTokenResponse.string("access_token"))
                    .set(TIMESTAMP, System.currentTimeMillis())
                    .set(TOKEN_DURATION, accessTokenResponse.string("expires_in"))
                    .set(ID, LAST_TOKEN);
            this.googleAccessToken.save(newToken);
            this.accessToken = accessTokenResponse.string("access_token");
        } catch (Exception e) {
            appLogs.error("An error occurred while trying to get the access token, check the given OAuth scopes", e);
        }
        httpService().setupBearerAuthenticationHeader(this.accessToken);
        httpService().setupDefaultHeader("Content-Type", "application/json");
    }
}