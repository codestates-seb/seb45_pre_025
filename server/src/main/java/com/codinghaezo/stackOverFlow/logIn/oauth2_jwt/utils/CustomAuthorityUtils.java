package com.codinghaezo.stackOverFlow.logIn.oauth2_jwt.utils;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomAuthorityUtils {

    private final List<GrantedAuthority> USER_ROLES = AuthorityUtils.createAuthorityList("ROLE_USER");

    private final List<String> USER_ROLES_STRING = List.of("USER");

    // 게스트 권한 추가 필요


    public List<GrantedAuthority> createAuthorities(String email) {

        return USER_ROLES;
    }
    // db에 role 저장

    public List<String> createRoles(String email) {

        return USER_ROLES_STRING;
    }
    // db에 저장된 role을 기반으로 권한 생성

    public List<GrantedAuthority> createAuthorities(List<String> roles) {
        List<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
        return authorities;
    }
}
