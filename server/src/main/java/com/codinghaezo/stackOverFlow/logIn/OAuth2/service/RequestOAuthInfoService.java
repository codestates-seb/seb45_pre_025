//package com.codinghaezo.stackOverFlow.logIn.OAuth2.service;
//
//import com.codinghaezo.stackOverFlow.logIn.OAuth2.OAuthProvider;
//import com.codinghaezo.stackOverFlow.logIn.OAuth2.client.OAuthApiClient;
//import com.codinghaezo.stackOverFlow.logIn.OAuth2.params.OAuthLoginParams;
//import com.codinghaezo.stackOverFlow.logIn.OAuth2.response.OAuthInfoResponse;
//import org.springframework.stereotype.Component;
//
//import java.util.List;
//import java.util.Map;
//import java.util.function.Function;
//import java.util.stream.Collectors;
//
//@Component
//public class RequestOAuthInfoService {
//    private final Map<OAuthProvider, OAuthApiClient> clients;
//
//    public RequestOAuthInfoService(List<OAuthApiClient> clients) {
//        this.clients = clients.stream().collect(
//                Collectors.toUnmodifiableMap(OAuthApiClient::oAuthProvider, Function.identity())
//        );
//    }
//
//    public OAuthInfoResponse request(OAuthLoginParams params) {
//        OAuthApiClient client = clients.get(params.oAuthProvider());
//        String accessToken = client.requestAccessToken(params);
//        return client.requestOauthInfo(accessToken);
//    }
//}