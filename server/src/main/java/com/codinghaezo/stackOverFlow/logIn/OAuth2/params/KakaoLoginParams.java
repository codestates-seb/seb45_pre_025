//package com.codinghaezo.stackOverFlow.logIn.OAuth2.params;
//
//import com.codinghaezo.stackOverFlow.logIn.OAuth2.OAuthProvider;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import org.springframework.util.LinkedMultiValueMap;
//import org.springframework.util.MultiValueMap;
//
//@Getter
//@NoArgsConstructor
//public class KakaoLoginParams implements OAuthLoginParams {
//    private String authorizationCode;
//
//    @Override
//    public OAuthProvider oAuthProvider() {
//        return OAuthProvider.KAKAO;
//    }
//
//    @Override
//    public MultiValueMap<String, String> makeBody() {
//        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
//        body.add("code", authorizationCode);
//        return body;
//    }
//}