package com.ssafy.skyeye.controller;

import com.ssafy.skyeye.data.dto.request.CrackRegistDto;
import com.ssafy.skyeye.data.dto.request.CrackUpdateDto;
import com.ssafy.skyeye.data.dto.request.UserUpdateDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;
import com.ssafy.skyeye.data.dto.response.UserDto;
import com.ssafy.skyeye.data.entity.Image;
import com.ssafy.skyeye.service.CrackService;
import com.ssafy.skyeye.service.ImageService;
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
@RequestMapping("/crack")
@RequiredArgsConstructor
public class CrackController {

    private final CrackService crackService;
    private final ImageService imageService;


    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    @PostMapping("/regist")
    public ResponseEntity<?> registCrack(@RequestPart(name = "profile", required = false) MultipartFile profile,
                                        @RequestPart(name = "drone") CrackRegistDto input){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

        if(profile != null){
            long id = 0l;
            id = imageService.addImage(Image.builder().build(), profile);
            input.setImageId(id);
        }

        crackService.registCrack(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // 유저 상세조회
    @GetMapping("/get/{crackId}")
    public ResponseEntity<?> getCrack(@PathVariable String crackId){
        // TODO: JWT로 유저 확인 하는 것
        log.info("{} 메소드 호출",Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", crackId);

        Map<String, Object> data = new HashMap<>();
        CrackDto crack = crackService.getCrack(Long.parseLong(crackId));

        data.put("data", crack);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    // 유저 업데이트
    @PutMapping("/update")
    public ResponseEntity<?> updateCrack(@RequestBody CrackUpdateDto input){
        // TODO: JWT로 유저 확인 하는 것
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

        crackService.updateCrack(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // 유저 삭제
    @DeleteMapping("/delete/{crackId}")
    public ResponseEntity<?> deleteCrack(@PathVariable String crackId){
        // TODO: JWT로 유저 확인 하는 것
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", crackId);

        crackService.deleteCrack(Long.parseLong(crackId));

        return new ResponseEntity<>(null, HttpStatus.OK);
    }
    
}
