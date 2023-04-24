package com.ssafy.skyeye.controller;

import com.ssafy.skyeye.data.dto.request.UserLoginDto;
import com.ssafy.skyeye.data.dto.request.UserRegistDto;
import com.ssafy.skyeye.data.dto.request.UserUpdateDto;
import com.ssafy.skyeye.data.dto.response.UserDto;
import com.ssafy.skyeye.data.entity.Image;
import com.ssafy.skyeye.service.ImageService;
import com.ssafy.skyeye.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final ImageService imageService;

    // 유저 등록
    @PostMapping("/regist")
    public ResponseEntity<?> registUser(@RequestPart(name = "profile", required = false)MultipartFile profile,
                                        @RequestPart(name = "user")UserRegistDto input){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

        if(profile != null){
            long id = 0l;
            id = imageService.addImage(Image.builder().build(), profile);
            input.setUserImageId(id);
        }

        userService.registUser(input);

        return new ResponseEntity<>(null,HttpStatus.OK);
    }


    // 유저 로그인
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginDto input){
        // TODO: JWT 적용해야함
        // TODO: JWT로 유저 확인 하는 것
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

        Map<String, Object> data = new HashMap<>();
        UserDto user = userService.loginUser(input);

        data.put("data", user);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    // 유저 상세조회
    @GetMapping("/get/{userId}")
    public ResponseEntity<?> getUser(@PathVariable String userId){
        // TODO: JWT로 유저 확인 하는 것
        log.info("{} 메소드 호출",Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", userId);

        Map<String, Object> data = new HashMap<>();
        UserDto user = userService.getUser(userId);

        data.put("data", user);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    // 유저 업데이트
    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestPart(name = "profile", required = false)MultipartFile profile,
                                        @RequestPart(name = "user")UserUpdateDto input){
        // TODO: JWT로 유저 확인 하는 것
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);
        if(profile != null){
            long id = 0l;
            id = imageService.addImage(Image.builder().build(), profile);
            input.setUserImageId(id);
        }

        userService.updateUser(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // 유저 삭제
    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable String userId){
        // TODO: JWT로 유저 확인 하는 것
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", userId);

        userService.deleteUser(userId);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }


}
