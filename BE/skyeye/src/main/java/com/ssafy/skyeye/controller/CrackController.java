package com.ssafy.skyeye.controller;

import com.ssafy.skyeye.data.dto.request.CrackRegistDto;
import com.ssafy.skyeye.data.dto.request.CrackUpdateDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;
import com.ssafy.skyeye.data.entity.Image;
import com.ssafy.skyeye.service.CrackService;
import com.ssafy.skyeye.service.ImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.UrlResource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

@Slf4j
@RestController
@RequestMapping("/crack")
@RequiredArgsConstructor
public class CrackController {

    private final CrackService crackService;
    private final ImageService imageService;


    //////////////////////////////////////////////////////////////////////////////////////////////////////////


    // 균열 등록
    @PostMapping("/regist")
    public ResponseEntity<?> registCrack(@RequestPart(name = "profile") MultipartFile profile,
                                        @RequestPart(name = "crack") CrackRegistDto input){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);


        long id = 0l;
        id = imageService.addImage(Image.builder().build(), profile);
        input.setImageId(id);


        crackService.registCrack(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // 균열 상세조회
    @GetMapping("/get/{crackId}")
    public ResponseEntity<?> getCrack(@PathVariable String crackId){
        // TODO: JWT로 유저 확인 하는 것
        log.info("{} 메소드 호출",Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", crackId);

        Map<String, Object> data = new HashMap<>();
        CrackDto crack = crackService.getCrack(Long.parseLong(crackId));

        data.put("data", crack);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    // 균열정보 업데이트
    @PutMapping("/update")
    public ResponseEntity<?> updateCrack(@RequestBody CrackUpdateDto input){
        // TODO: JWT로 유저 확인 하는 것
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

        crackService.updateCrack(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // 균열 삭제
    @DeleteMapping("/delete/{crackId}")
    public ResponseEntity<?> deleteCrack(@PathVariable String crackId){
        // TODO: JWT로 유저 확인 하는 것
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", crackId);

        crackService.deleteCrack(Long.parseLong(crackId));

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping("/download")
    public ResponseEntity<?> imageDownload(@RequestParam String imageSrc) throws IOException {

        File file = new File(imageSrc);

        UrlResource resource = new UrlResource("file:" +imageSrc);

        String fileName = imageSrc.split("/")[2];

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .cacheControl(CacheControl.noCache())
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileName)
                .body(resource);
    }
    
}
