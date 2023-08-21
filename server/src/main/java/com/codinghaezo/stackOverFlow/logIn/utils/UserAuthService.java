package com.codinghaezo.stackOverFlow.logIn.utils;

import com.codinghaezo.stackOverFlow.logIn.jwt.jwt.JwtTokenizer;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Service
public class UserAuthService {

    private final JwtTokenizer jwtTokenizer;

    public UserAuthService(JwtTokenizer jwtTokenizer) {
        this.jwtTokenizer = jwtTokenizer;
    }

    public String isUserLoggedIn(HttpServletRequest request) {
        try {
            String jws = request.getHeader("Authorization").replace("Bearer ", "");
            String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

            // 토큰을 검증하고 클레임 정보를 추출합니다.
            Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();

            // 여기서는 사용자의 식별 정보가 클레임에 "username" 키로 포함되어 있다고 가정합니다.
            // 실제 클레임 구조에 맞게 수정해야 합니다.
            String username = (String) claims.get("Id");

            // 사용자의 식별 정보(username)를 사용하여 로그인 상태 여부를 판단합니다.
            // 예를 들어, 해당 사용자의 정보를 데이터베이스에서 가져와 로그인 상태 여부를 판단할 수 있습니다.

            // 로그인 상태인 경우 true 반환
            // 로그인하지 않은 상태인 경우 false 반환
            return username;
        } catch (Exception e) {
            // 토큰이 유효하지 않거나 예외가 발생한 경우, 로그인하지 않은 상태로 간주합니다.
            return "fail";
        }
    }
}