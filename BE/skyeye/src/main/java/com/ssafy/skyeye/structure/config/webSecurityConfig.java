package com.ssafy.skyeye.structure.config;

import com.ssafy.skyeye.data.exception.CustomAccessDeniedHandler;
import com.ssafy.skyeye.data.exception.CustomAuthenticationEntryPoing;
import com.ssafy.skyeye.data.exception.UnAuthorizationException;
import com.ssafy.skyeye.structure.jwt.JwtAuthenticationFilter;
import com.ssafy.skyeye.structure.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class webSecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtTokenProvider jwtTokenProvider;

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception{
        httpSecurity
//                .cors().disable()
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .formLogin().disable() // sessionManagement()에선 필요없음
//                .headers().frameOptions().disable(); // sessionManagement()에선 필요없음
                .and()
                .authorizeRequests()
                .antMatchers("/user/login", "/user/regist", "/drone/login", "/drone/regist", "/admin/login").permitAll()
//                .antMatchers(HttpMethod.POST, "/user/login").permitAll()
                .antMatchers("/drone/**").hasAnyRole("DRONE", "USER", "ADMIN")
                .antMatchers("/crack/**").hasAnyRole("USER", "ADMIN")
                .antMatchers("/building/**").hasAnyRole("USER", "ADMIN")
                .antMatchers("/user/**").hasAnyRole("USER", "ADMIN")
                .antMatchers("/admin/**").hasRole("ADMIN")
                .antMatchers("**exception**").permitAll() // exception이 들어간 모든 경로를 허용
                .antMatchers("**Exception**").permitAll() // Exception이 들어간 모든 경로를 허용
                .anyRequest().authenticated()
                .and()
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
    public PasswordEncoder getPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
