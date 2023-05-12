package com.ssafy.skyeye.data.exception;

import com.ssafy.skyeye.data.dto.request.UserCustomDetails;
import com.ssafy.skyeye.data.dto.response.UserDto;
import com.ssafy.skyeye.service.UserService;
import com.ssafy.skyeye.structure.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
@Slf4j
@RequiredArgsConstructor
public class OAuth2AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    @Value("{jwt.auth}")
    private String authToken;

    @Value("${app.oauth2.authorizedRedirectUri}")
    private String redirectUri;


    private final JwtTokenProvider jwtTokenProvider;


    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        if (response.isCommitted()) {
            return;
        }
        log.info("{} 메서드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        System.out.println(authentication.getPrincipal());

        List<String> list = new ArrayList<>();
        list.add("ROLE_SOCIAL_USER");

        UserCustomDetails user = new UserCustomDetails(authentication.getName(), list);



        String auth = jwtTokenProvider.createToken(user);
        Cookie cookie = jwtTokenProvider.createCookie(auth);
        response.addCookie(cookie);

        getRedirectStrategy().sendRedirect(request, response, redirectUri);
    }

}
