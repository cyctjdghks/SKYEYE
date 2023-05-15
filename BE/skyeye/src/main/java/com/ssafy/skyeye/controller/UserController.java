package com.ssafy.skyeye.controller;

import com.ssafy.skyeye.data.dto.request.*;
import com.ssafy.skyeye.data.dto.response.UserDto;
import com.ssafy.skyeye.data.entity.Image;
import com.ssafy.skyeye.service.ImageService;
import com.ssafy.skyeye.service.UserService;
import com.ssafy.skyeye.structure.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final ImageService imageService;
    private final JwtTokenProvider jwtTokenProvider;

    @Value("${jwt.auth}")
    private String Authorization;

    // 유저 등록
    @PostMapping("/regist")
    public ResponseEntity<?> registUser(@RequestPart(name = "profile", required = false)MultipartFile profile,
                                        @RequestPart(name = "user")UserRegistDto input){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

        if(profile != null && !profile.isEmpty() ){
            long id = 0l;
            id = imageService.addImage(Image.builder().build(), profile);
            input.setUserImageId(id);
        }

        userService.registUser(input);

        return new ResponseEntity<>(null,HttpStatus.OK);
    }


    // 유저 로그인
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginDto input, HttpServletResponse response){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

        UserDto user = userService.loginUser(input);

        String auth = jwtTokenProvider.createToken(user);
        Cookie cookie = jwtTokenProvider.createCookie(auth);
        response.addCookie(cookie);


        log.info("출력 데이터 : {}", user);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    // 유저 상세조회
    @GetMapping("/get/{userId}")
    public ResponseEntity<?> getUser(@PathVariable String userId){
        log.info("{} 메소드 호출",Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", userId);

//        String jwtId = String.valueOf(SecurityContextHolder.getContext().getAuthentication().getName());
//        if(!jwtId.equals(userId) && !jwtId.equals("admin")) throw new ForbiddenException("본인 아이디가 아닙니다.");

        UserDto user = userService.getUser(userId);

        log.info("출력 데이터 : {}", user);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    // 유저 업데이트
    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestPart(name = "profile", required = false)MultipartFile profile,
                                        @RequestPart(name = "user")UserUpdateDto input){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

//        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
//        if(!jwtId.equals(input.getUserId()) && !jwtId.equals("admin")) throw new ForbiddenException("본인 아이디가 아닙니다.");


        if(profile != null && !profile.isEmpty() ){
            long id = 0l;
            id = imageService.addImage(Image.builder().build(), profile);
            input.setUserImageId(id);
        }
        // TODO: 반환 안해도 됨?
        userService.updateUser(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // 유저 삭제
    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable String userId){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", userId);

//        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
//        if(!jwtId.equals(userId) && !jwtId.equals("admin")) throw new ForbiddenException("본인 아이디가 아닙니다.");

        userService.deleteUser(userId);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // 유저 비밀번호 변경
    @PutMapping("/change")
    public ResponseEntity<?> changePw(@RequestBody PwChangeUserDto input){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

//        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
//        if(!jwtId.equals(input.getUserId()) && !jwtId.equals("admin")) throw new ForbiddenException("본인 아이디가 아닙니다.");

        userService.changePw(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }


    // 유저 id 중복검사
    @GetMapping("/valid/{userId}")
    public ResponseEntity<?> validId(@PathVariable String userId){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", userId);

        boolean exist = userService.validId(userId);

        // true 면 아이디가 있는거 false 면 없는거
        log.info("출력 데이터 : {}", exist);

        return new ResponseEntity<>(exist, HttpStatus.OK);
    }


    // 로그아웃 -> 쿠키만 없애줌
    @GetMapping("/logout")
    public ResponseEntity<?> logoutUser(HttpServletResponse response){
        Cookie cookie = new Cookie(Authorization, "");
        cookie.setMaxAge(0);
        response.addCookie(cookie);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }


    @GetMapping("/get")
    public ResponseEntity<?> loginOAuth2User(){
        log.info("{} 메서드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getName()));
        String userId = String.valueOf(SecurityContextHolder.getContext().getAuthentication().getName());
        log.info(userId);
        UserDto user = userService.getUser(userId);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }


}
