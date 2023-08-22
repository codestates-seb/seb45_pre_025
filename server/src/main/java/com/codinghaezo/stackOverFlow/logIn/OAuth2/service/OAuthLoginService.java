//package com.codinghaezo.stackOverFlow.logIn.OAuth2.service;
//
//import com.codinghaezo.stackOverFlow.logIn.OAuth2.params.OAuthLoginParams;
//import com.codinghaezo.stackOverFlow.logIn.OAuth2.response.OAuthInfoResponse;
//import com.codinghaezo.stackOverFlow.logIn.jwt.jwt.AuthTokens;
//import com.codinghaezo.stackOverFlow.logIn.jwt.jwt.AuthTokensGenerator;
//import com.codinghaezo.stackOverFlow.member.Member;
//import com.codinghaezo.stackOverFlow.member.MemberRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//@Service
//@RequiredArgsConstructor
//public class OAuthLoginService {
//    private final MemberRepository memberRepository;
//    private final AuthTokensGenerator authTokensGenerator;
//    private final RequestOAuthInfoService requestOAuthInfoService;
//
//    public AuthTokens login(OAuthLoginParams params) {
//        OAuthInfoResponse oAuthInfoResponse = requestOAuthInfoService.request(params);
//        Long memberId = findOrCreateMember(oAuthInfoResponse);
//        return authTokensGenerator.generate(memberId);
//    }
//
//    private Long findOrCreateMember(OAuthInfoResponse oAuthInfoResponse) {
//        return memberRepository.findByEmail(oAuthInfoResponse.getEmail())
//                .map(Member::getMemberId)
//                .orElseGet(() -> newMember(oAuthInfoResponse));
//    }
//
//    private Long newMember(OAuthInfoResponse oAuthInfoResponse) {
//        Member member = Member.builder()
//                .email(oAuthInfoResponse.getEmail())
//                .userName(oAuthInfoResponse.getNickname())
//                .oAuthProvider(oAuthInfoResponse.getOAuthProvider())
//                .build();
//
//        return memberRepository.save(member).getMemberId();
//    }
//}