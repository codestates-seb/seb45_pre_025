package com.codinghaezo.stackOverFlow.logIn.jwt.jwt;

import com.codinghaezo.stackOverFlow.logIn.jwt.userDetails.CustomUserDetails;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JwtAuthService {

    @Autowired
    private JwtTokenizer jwtTokenizer;

    // 토큰 검증 및 사용자 식별
    public CustomUserDetails verifyTokenAndExtractUserDetails(String token) {
        try {
            Jws<Claims> claimsJws = jwtTokenizer.getClaims(token, jwtTokenizer.getSecretKey());

            Claims claims = claimsJws.getBody();
            String subject = claims.getSubject();

            // 토큰에서 사용자 정보 추출 및 반환
            CustomUserDetails userDetails = new CustomUserDetails();
            userDetails.setUserId(subject); // 사용자 식별자 설정 등

            // 필요한 경우 roles 등 다른 사용자 정보 설정

            return userDetails;
        } catch (Exception e) {
            // 토큰 검증 실패
            e.printStackTrace();
            return null;
        }
    }
}