package com.ssafy.skyeye.structure.config;

import com.ssafy.skyeye.data.exception.*;
import com.ssafy.skyeye.service.impl.CustomOAuth2UserService;
import com.ssafy.skyeye.structure.jwt.JwtAuthenticationFilter;
import com.ssafy.skyeye.structure.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class webSecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtTokenProvider jwtTokenProvider;
    private final OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler;
    private final OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;
    private final CustomOAuth2UserService customOAuth2UserService;

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception{
        httpSecurity
                .cors()
                .and()
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//                .formLogin().disable() // sessionManagement()에선 필요없음
//                .headers().frameOptions().disable(); // sessionManagement()에선 필요없음

        httpSecurity
        .authorizeRequests()
                .antMatchers("/user/login", "/user/regist", "/drone/login", "/drone/regist", "/admin/login", "/user/valid/**", "/drone/valid/**").permitAll()
////                .antMatchers(HttpMethod.POST, "/user/login").permitAll()
                .antMatchers("/drone/**").hasAnyRole("DRONE", "USER", "ADMIN")
                .antMatchers("/crack/**").hasAnyRole("USER", "ADMIN")
                .antMatchers("/building/**").hasAnyRole("USER", "ADMIN")
                .antMatchers("/user/**").hasAnyRole("USER", "ADMIN")
                .antMatchers("/admin/**").hasRole("ADMIN")
                .antMatchers("**exception**").permitAll() // exception이 들어간 모든 경로를 허용
                .antMatchers("**Exception**").permitAll() // Exception이 들어간 모든 경로를 허용
                .anyRequest().permitAll();

                httpSecurity
                .oauth2Login()
                .userInfoEndpoint()
                .userService(customOAuth2UserService)
                .and()
                .successHandler(oAuth2AuthenticationSuccessHandler) // 인증 성공 후처리
                .failureHandler(oAuth2AuthenticationFailureHandler); // 인증 실패 후처리;

                httpSecurity
                .exceptionHandling().accessDeniedHandler(new CustomAccessDeniedHandler())
                .and()
                .exceptionHandling().authenticationEntryPoint(new CustomAuthenticationEntryPoing()) // 인증 과정에서 예외가 발생한 경우 예외 전달
                .and()
                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
    }

    // WebSecurity는 HttpSecurity 앞단에서 적용되며 스프링 시큐리티 영향 밖에 있습니다.
    // 주로 Swagger와 관련된 경로에 대한 예외처리를 수행합니다.
    // 정확히는 인증, 인가를 무시하는 경로입니다.
    @Override
    public void configure(WebSecurity webSecurity){
        webSecurity.ignoring().antMatchers(
                "/v3/api-docs/**", "/swagger-resources/**", "/swagger-ui/**",
                "/webjars/**", "/swagger/**", "/sign-api/exception"
        );
    }


    // Password 암호화
    @Bean
//    @Lazy
    public PasswordEncoder getPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOriginPattern("*");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
//
//    @Bean
//    public OAuth2UserService<OAuth2UserRequest, OAuth2User> oAuth2UserService() {
//        return new CustomOAuth2UserService();
//    }
}
