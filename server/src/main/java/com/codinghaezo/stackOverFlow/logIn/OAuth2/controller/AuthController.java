//package com.codinghaezo.stackOverFlow.logIn.OAuth2.controller;
//
//import com.codinghaezo.stackOverFlow.logIn.OAuth2.params.KakaoLoginParams;
//import com.codinghaezo.stackOverFlow.logIn.OAuth2.params.NaverLoginParams;
//import com.codinghaezo.stackOverFlow.logIn.OAuth2.service.OAuthLoginService;
//import com.codinghaezo.stackOverFlow.logIn.jwt.jwt.AuthTokens;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/auth/login")
//public class AuthController {
//    private final OAuthLoginService oAuthLoginService;
//
//    @PostMapping("/kakao")
//    public ResponseEntity<AuthTokens> loginKakao(@RequestBody KakaoLoginParams params) {
//        return ResponseEntity.ok(oAuthLoginService.login(params));
//    }
//
//    @PostMapping("/naver")
//    public ResponseEntity<AuthTokens> loginNaver(@RequestBody NaverLoginParams params) {
//        return ResponseEntity.ok(oAuthLoginService.login(params));
//    }
//}
