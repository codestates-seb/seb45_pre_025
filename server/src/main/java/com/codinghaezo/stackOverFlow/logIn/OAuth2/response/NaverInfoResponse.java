//package com.codinghaezo.stackOverFlow.logIn.OAuth2.response;
//
//import com.codinghaezo.stackOverFlow.logIn.OAuth2.OAuthProvider;
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import com.fasterxml.jackson.annotation.JsonProperty;
//import lombok.Getter;
//
//@Getter
//@JsonIgnoreProperties(ignoreUnknown = true)
//public class NaverInfoResponse implements OAuthInfoResponse {
//
//    @JsonProperty("response")
//    private Response response;
//
//    @Getter
//    @JsonIgnoreProperties(ignoreUnknown = true)
//    static class Response {
//
//        private String email;
//        private String userName;
//        public String profileImageUrl;
//    }
//
//    @Override
//    public String getEmail() {
//        return response.email;
//    }
//
//    @Override
//    public String getNickname() {
//        return response.userName;
//    }
//
//    @Override
//    public OAuthProvider getOAuthProvider() {
//        return OAuthProvider.NAVER;
//    }
//    @Override
//    public String getProfileImageUrl() {
//        return response.profileImageUrl;
//    }
//}