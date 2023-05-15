package com.ssafy.skyeye.structure.jwt;

import com.ssafy.skyeye.data.exception.UnAuthorizationException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenProvider jwtTokenProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        // 쿠키에서 token 추출
        String token = jwtTokenProvider.resolveToken(request);

        if(token !=null && jwtTokenProvider.validateToken(token, response)){
            Authentication authentication = jwtTokenProvider.getAuthentication(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }else{
//            throw new UnAuthorizationException("토큰이 만료되었습니다.");
        }

        filterChain.doFilter(request,response);

    }
}
