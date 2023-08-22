//package com.codinghaezo.stackOverFlow.logIn.OAuth2.response;
//
//import com.codinghaezo.stackOverFlow.logIn.OAuth2.OAuthProvider;
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import com.fasterxml.jackson.annotation.JsonProperty;
//import lombok.Getter;
//
//@Getter
//@JsonIgnoreProperties(ignoreUnknown = true)
//public class KakaoInfoResponse implements OAuthInfoResponse {
//
//    @JsonProperty("kakao_account")
//    private KakaoAccount kakaoAccount;
//
//    @Getter
//    @JsonIgnoreProperties(ignoreUnknown = true)
//    static class KakaoAccount {
//        private KakaoProfile profile;
//        private String email;
//    }
//
//    @Getter
//    @JsonIgnoreProperties(ignoreUnknown = true)
//    static class KakaoProfile {
//        private String userName;
//        @JsonProperty("profile_image_url")
//        private String profileImageUrl;
//    }
//
//    @Override
//    public String getEmail() {
//        return kakaoAccount.email;
//    }
//
//    @Override
//    public String getNickname() {
//        return kakaoAccount.profile.userName;
//    }
//
//    @Override
//    public OAuthProvider getOAuthProvider() {
//        return OAuthProvider.KAKAO;
//    }
//    @Override
//    public String getProfileImageUrl() {
//        return kakaoAccount.profile.profileImageUrl;
//    }
//}