package com.ssafy.skyeye.structure.jwt;

import com.ssafy.skyeye.data.dto.request.UserCustomDetails;
import com.ssafy.skyeye.data.dto.response.UserDto;
import com.ssafy.skyeye.data.exception.UnAuthorizationException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import java.nio.charset.StandardCharsets;
import java.util.*;

@Component
@RequiredArgsConstructor
@Slf4j
public class JwtTokenProvider {

    @Value("${jwt.secret}")
    private String secretKey;
    @Value(("${jwt.time}"))
    private long tokenValidMillisecond; // 밀리초 * 초 * 분 * 시간

    @Value("${jwt.auth}")
    private String Authorization;

    @PostConstruct
    protected void init(){
        log.info("JWT Init");
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes(StandardCharsets.UTF_8));
    }

    // 토큰 생성
    public String createToken(UserDto dto){
        log.info("{} 메서드 실행", Thread.currentThread().getStackTrace()[1].getMethodName());

        Claims claims = Jwts.claims().setSubject(dto.getUserId());
        claims.put("id", dto.getUserId());
        claims.put("role", "USER");

        return creater(claims);
    }
    public String createToken(){
        log.info("{} 메서드 실행", Thread.currentThread().getStackTrace()[1].getMethodName());

        Claims claims = Jwts.claims().setSubject("admin");
        claims.put("id", "admin");
        claims.put("role", "ADMIN");

        return creater(claims);
    }

    private String creater(Claims claims){
        Date now = new Date();

        String token= Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + tokenValidMillisecond))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
        log.info("생성완료");
        return token;
    }

    // 토큰에 저장된 정보 꺼내기 (Claims로 반환 getBody까지)
    private Claims getData(String token){
        log.info("{} 메서드 실행", Thread.currentThread().getStackTrace()[1].getMethodName());

        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
    }


    // 토큰 정보 조회 후 SecurityContextHolder의 Authentication에 저장
    // 꺼내는 법 Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    public Authentication getAuthentication(String token){
        log.info("{} 메서드 실행", Thread.currentThread().getStackTrace()[1].getMethodName());

        UserCustomDetails userCustomDetails =
                new UserCustomDetails(getData(token).get("id").toString(), Collections.singletonList("ROLE_"+getData(token).get("role").toString()));
        log.info("data : {}", userCustomDetails);

        return new UsernamePasswordAuthenticationToken(userCustomDetails,"",userCustomDetails.getAuthorities());
    }

    // request(본 프로젝트에서는 쿠키 사용)에서 token 추출하기
    public String resolveToken(HttpServletRequest request){
        log.info("{} 메서드 실행", Thread.currentThread().getStackTrace()[1].getMethodName());
        Cookie[] cookies = request.getCookies();
        String token = "";
        System.out.println(Authorization);
        if(cookies != null) {
//            throw new UnAuthorizationException("권한이 없습니다.");
            for (Cookie c : cookies) {
                if (c.getName().equals(Authorization)) {
                    token = c.getValue();
                    break;
                }
            }
        }
        System.out.println(token);
        if(token.equals("")){
//            throw new UnAuthorizationException("권한이 없습니다.");
            return null;
        }

        return token;
    }

    // token의 유효기간 확인하기
    public boolean validateToken(String token){
        log.info("{} 메서드 실행", Thread.currentThread().getStackTrace()[1].getMethodName());

        return !getData(token).getExpiration().before(new Date());
    }

    // cookie 생성기
    public Cookie createCookie(String token){
        Cookie cookie = new Cookie(Authorization,token);
        cookie.setMaxAge(60*60*24);
        cookie.setPath("/");
        return cookie;
    }

}
