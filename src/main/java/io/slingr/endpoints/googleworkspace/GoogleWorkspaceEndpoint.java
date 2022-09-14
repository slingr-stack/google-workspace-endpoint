package io.slingr.endpoints.googleworkspace;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.datastores.DataStore;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SlingrEndpoint(name = "google-workspace", functionPrefix = "_")
public class GoogleWorkspaceEndpoint extends HttpEndpoint {
    private static final String API_URL = "https://admin.googleapis.com/admin";
    private static final Logger logger = LoggerFactory.getLogger(GoogleWorkspaceEndpoint.class);
    private AuthManager authManager;

    @EndpointDataStore(name = AuthManager.DATA_STORE)
    private DataStore accessTokenDS;

    @ApplicationLogger
    private AppLogs appLogs;

    @EndpointConfiguration
    private Json configuration;

    @Override
    public String getApiUri() {
        return API_URL;
    }

    @Override
    public void endpointStarted() {
        try {
            appLogs.info("Setting access token on endpoint start....");
            this.authManager = new AuthManager(this.configuration.string("privateKey"), accessTokenDS, this.configuration.string("serviceAccountEmail"), this.configuration.string(("adminEmail")), this.configuration.strings("authScopes"), httpService());
            this.authManager.setLastToken();
            this.authManager.setUpTokenInRequests();
            appLogs.info("Access token succefully set up on endpoint start....");
        } catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
            appLogs.info("An error occurred while setting the access token ", e);
        }
    }

    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) throws FileNotFoundException, IOException {
        try {
            return defaultGetRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                this.authManager.setLastToken();
                this.authManager.setUpTokenInRequests();
                return defaultGetRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        try{
            return defaultPostRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                this.authManager.setLastToken();
                this.authManager.setUpTokenInRequests();
                return defaultPostRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_put")
    public Json put(FunctionRequest request) {
        try {
            return defaultPutRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                this.authManager.setLastToken();
                this.authManager.setUpTokenInRequests();                
                return defaultPutRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_patch")
    public Json patch(FunctionRequest request) {
        try {
            return defaultPatchRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                this.authManager.setLastToken();
                this.authManager.setUpTokenInRequests();
                return defaultPatchRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_delete")
    public Json delete(FunctionRequest request) {
        try {
            return defaultDeleteRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                this.authManager.setLastToken();
                this.authManager.setUpTokenInRequests();
                return defaultDeleteRequest(request);
            }
            throw restException;
        }
    }

    private boolean checkInvalidTokenError(Exception e) {
        if (e instanceof EndpointException) {
            EndpointException restException = (EndpointException) e;
            if (restException.getCode() != null) {
                logger.error("Status Code: "+ String.valueOf(restException.getReturnCode()));
            }
            return restException.getReturnCode() == 401;
        }
        return false;
    }

}
