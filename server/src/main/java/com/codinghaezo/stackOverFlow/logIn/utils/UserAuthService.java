package com.codinghaezo.stackOverFlow.logIn.utils;

import com.codinghaezo.stackOverFlow.exception.BusinessLogicException;
import com.codinghaezo.stackOverFlow.exception.ExceptionCode;
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

    public String getSignedInUserEmail(HttpServletRequest request) {

        String jws = request.getHeader("Authorization");
        if (jws.startsWith("Bearer ")) {
            jws = jws.substring(7);
        }

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();
        String email = (String) claims.get("username");
        if (email == null) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_SIGNED_IN);
        }
        return email;
    }
}