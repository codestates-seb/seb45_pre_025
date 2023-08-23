package com.codinghaezo.stackOverFlow.logIn.jwt.handler;

import com.codinghaezo.stackOverFlow.response.ErrorResponse;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

@Slf4j
public class MemberAuthenticationFailureHandler implements AuthenticationFailureHandler {  // (1)
    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
                                        HttpServletResponse response,
                                        AuthenticationException exception) throws IOException {
        // 인증 실패 시, 에러 로그를 기록하거나 error response를 전송할 수 있다.
        log.info("request Authorization 값 "+ request.getHeader("Authorization"));
        log.info("response Authorization 값 "+ response.getHeader("Authorization"));
        log.info("request userProfile 값 "+ request.getHeader("userProfile"));
        log.info("response userProfile 값 "+ response.getHeader("userProfile"));

    }
}