package com.codinghaezo.stackOverFlow.logIn.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class MyController {

    private final UserAuthService userAuthService;

    public MyController(UserAuthService userAuthService) {
        this.userAuthService = userAuthService;
    }

    @GetMapping("/some-resource")
    public ResponseEntity<String> getSomeResource(HttpServletRequest request) {
        String findUsername = userAuthService.isUserLoggedIn(request);
            return new ResponseEntity<String>(findUsername, HttpStatus.OK);
        }
    }
