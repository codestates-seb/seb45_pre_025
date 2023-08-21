package com.codinghaezo.stackOverFlow.logIn.jwt.userDetails;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.List;
@Getter
@Setter
public class CustomUserDetails {
    private String userId;
    private String email;
    private List<String> roles;
}
