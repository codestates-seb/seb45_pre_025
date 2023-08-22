package com.codinghaezo.stackOverFlow.logIn.utils;

import com.codinghaezo.stackOverFlow.logIn.jwt.jwt.JwtTokenizer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
public class UserController {

    private final JwtTokenizer jwtTokenizer;

    public UserController(JwtTokenizer jwtTokenizer) {
        this.jwtTokenizer = jwtTokenizer;
    }

    @GetMapping("/check-login")
    @ResponseBody
    public String checkLoginStatus(HttpServletRequest request) {
        try {
            String jws = request.getHeader("Authorization").replace("Bearer ", "");
            String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

            // 토큰을 검증하고 클레임 정보를 추출합니다.
            Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();

            // 클레임 정보에서 사용자의 식별 정보를 가져옵니다.
            String memberId  = (String) claims.get("memberId"); // 예시로 "username"이 클레임에 포함된 키라 가정합니다.

            // 사용자의 식별 정보(username)을 사용하여 필요한 작업을 수행합니다.
            // 예를 들어, 해당 사용자의 정보를 데이터베이스에서 가져와 로그인 상태 여부를 판단하거나 다른 처리를 할 수 있습니다.

            return "Logged in user: " + memberId;
        } catch (Exception e) {
            // 토큰이 유효하지 않거나 예외가 발생한 경우, 로그인하지 않은 상태로 간주합니다.
            return "Not logged in";
        }
    }
}