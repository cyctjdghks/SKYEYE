package com.ssafy.skyeye.data.exception;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.skyeye.data.dto.response.EntryPointErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
public class CustomAuthenticationEntryPoing implements AuthenticationEntryPoint {


    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        log.info("{} 메소드 실행", Thread.currentThread().getStackTrace()[1].getMethodName());
        ObjectMapper objectMapper = new ObjectMapper();

        EntryPointErrorResponse entryPointErrorResponse = new EntryPointErrorResponse();
        entryPointErrorResponse.setMsg("인증이 실패하였습니다.");

        response.setStatus(401);
        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");
        response.getWriter().write(objectMapper.writeValueAsString(entryPointErrorResponse));

    }
}
