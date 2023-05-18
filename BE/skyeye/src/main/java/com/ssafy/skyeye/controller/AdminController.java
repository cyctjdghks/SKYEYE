package com.ssafy.skyeye.controller;

import com.ssafy.skyeye.data.dto.request.AdminLoginDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;
import com.ssafy.skyeye.data.dto.response.FolderDto;
import com.ssafy.skyeye.data.dto.response.UserDto;
import com.ssafy.skyeye.data.exception.ForbiddenException;
import com.ssafy.skyeye.service.AdminService;
import com.ssafy.skyeye.structure.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {
    private final AdminService adminService;

    private final JwtTokenProvider jwtTokenProvider;

    @Value("${jwt.auth}")
    private String Authorization;

    ////////////////////////////////////////////////////////////////////////////////////////////

    @PostMapping("/login")
    public ResponseEntity<?> loginAdmin(@RequestBody AdminLoginDto input, HttpServletResponse response){
        log.info("{} 메서드 실행", Thread.currentThread().getStackTrace()[1].getClassName());
        log.info("입력 데이터 : {}", input);

        adminService.loginAdmin(input);

        String auth = jwtTokenProvider.createToken();

        Cookie cookie = jwtTokenProvider.createCookie(auth);
        response.addCookie(cookie);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<?> findUserAll(){
        log.info("{} 메서드 실행", Thread.currentThread().getStackTrace()[1].getClassName());

        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
        if(!jwtId.equals("admin")) throw new ForbiddenException("관리자 맞습니까?");


        List<UserDto> list = adminService.findUserAll();


        log.info("출력 데이터 : {}", list);

        return new ResponseEntity<>(list, HttpStatus.OK);

    }

    @GetMapping("/folder")
    public ResponseEntity<?> findFolderAll(){
        log.info("{} 메서드 실행", Thread.currentThread().getStackTrace()[1].getClassName());

        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
        if(!jwtId.equals("admin")) throw new ForbiddenException("관리자 맞습니까?");

        List<FolderDto> list = adminService.findFolderAll();


        log.info("출력 데이터 : {}", list);

        return new ResponseEntity<>(list, HttpStatus.OK);

    }

    @GetMapping("/crack")
    public ResponseEntity<?> findCrackAll(){
        log.info("{} 메서드 실행", Thread.currentThread().getStackTrace()[1].getClassName());

        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
        if(!jwtId.equals("admin")) throw new ForbiddenException("관리자 맞습니까?");

        List<CrackDto> list = adminService.findCrackAll();


        log.info("출력 데이터 : {}", list);

        return new ResponseEntity<>(list, HttpStatus.OK);

    }

    @GetMapping("/logout")
    public ResponseEntity<?> logoutAdmin(HttpServletResponse response){
        Cookie cookie = new Cookie(Authorization, "");
        cookie.setMaxAge(0);
        response.addCookie(cookie);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
