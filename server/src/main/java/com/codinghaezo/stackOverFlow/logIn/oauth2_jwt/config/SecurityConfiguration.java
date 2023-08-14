package com.codinghaezo.stackOverFlow.logIn.oauth2_jwt.config;

import com.codinghaezo.stackOverFlow.logIn.oauth2_jwt.auth.filter.JwtVerificationFilter;
import com.codinghaezo.stackOverFlow.logIn.oauth2_jwt.auth.handler.MemberAccessDeniedHandler;
import com.codinghaezo.stackOverFlow.logIn.oauth2_jwt.auth.handler.MemberAuthenticationEntryPoint;
import com.codinghaezo.stackOverFlow.logIn.oauth2_jwt.auth.handler.OAuth2MemberSuccessHandler;
import com.codinghaezo.stackOverFlow.logIn.oauth2_jwt.jwt.JwtTokenizer;
import com.codinghaezo.stackOverFlow.logIn.oauth2_jwt.utils.CustomAuthorityUtils;
import com.codinghaezo.stackOverFlow.member.MemberService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
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

    public SecurityConfiguration(JwtTokenizer jwtTokenizer,
                                 CustomAuthorityUtils authorityUtils,
                                 MemberService memberService) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberService = memberService;
    }
    /*
    SecurityFilterChain은 Spring Security의 구성(config)을 정의하고 보안 필터 체인을 생성하는 역할을 담당합니다.
    각각의 보안 필터는 요청에 대한 인증 및 인가를 처리하고,
    웹 애플리케이션의 보안을 강화하는 역할을 합니다.

    SecurityFilterChain은 다양한 보안 필터를 순서대로 연결하여 보안 체인을 구성합니다.
    이 체인을 통해 클라이언트의 요청이 들어올 때마다 각 필터가 순차적으로 실행되며,
    요청에 대한 처리 및 보안 관련 로직을 수행합니다.
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(Customizer.withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 세션 저장 X
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(
                        authorize-> authorize
                                .anyRequest().permitAll()
                )
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(new OAuth2MemberSuccessHandler(jwtTokenizer, authorityUtils, memberService)));

        return http.build();

    }
    //서버에서 어떤 출처에서 어떤 리소스에 접근할 수 있는지에 대한 정책을 설정
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    //security 세부 설정
    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception{
            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder.addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
        }
    }
}
