package com.codinghaezo.stackOverFlow.logIn.jwt.config;

import com.codinghaezo.stackOverFlow.logIn.jwt.filter.JwtAuthenticationFilter;
import com.codinghaezo.stackOverFlow.logIn.jwt.handler.MemberAuthenticationFailureHandler;
import com.codinghaezo.stackOverFlow.logIn.jwt.handler.MemberAuthenticationSuccessHandler;
import com.codinghaezo.stackOverFlow.logIn.jwt.filter.JwtVerificationFilter;
import com.codinghaezo.stackOverFlow.logIn.jwt.jwt.JwtTokenizer;
import com.codinghaezo.stackOverFlow.logIn.oauth2_jwt.auth.handler.OAuth2MemberSuccessHandler;
import com.codinghaezo.stackOverFlow.logIn.utils.CustomAuthorityUtils;
import com.codinghaezo.stackOverFlow.member.MemberService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberService memberService;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils, MemberService memberService) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberService = memberService;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // (1) 추가
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.PATCH, "/*/members/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/*/members/**").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/*/members/**").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/*/answers/**").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/*/answers/**").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/*/answers/**").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/*/questions/**").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/*/questions/**").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/*/questions/**").hasRole("USER")
                        .anyRequest().permitAll()

                ).oauth2Login(oauth2 -> oauth2
                       .successHandler(new OAuth2MemberSuccessHandler(jwtTokenizer, authorityUtils, memberService)));
        return http.build();
    }

    // (7)
    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/auth/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);  // (2) 추가

            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
        }
    }
}
