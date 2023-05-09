package com.ssafy.skyeye.controller;

import com.ssafy.skyeye.data.dto.request.FolderRegistDto;
import com.ssafy.skyeye.data.dto.request.FolderUpdateDto;
import com.ssafy.skyeye.data.dto.response.CountCrackDto;
import com.ssafy.skyeye.data.dto.response.FolderDto;
import com.ssafy.skyeye.data.dto.response.ImageDto;
import com.ssafy.skyeye.service.FolderService;
import com.ssafy.skyeye.service.ImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/folder")
@RequiredArgsConstructor
public class FolderController {

    private final FolderService folderService;

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    @PostMapping("/regist")
    public ResponseEntity<?> registFolder(@RequestBody FolderRegistDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

        folderService.registFolder(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateFolder(@RequestBody FolderUpdateDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

        folderService.updateFolder(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @DeleteMapping("delete/{folderId}")
    public ResponseEntity<?> deleteFolder(@PathVariable long folderId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", folderId);

        folderService.deleteFolder(folderId);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping("/get/all/{userId}")
    public ResponseEntity<?> getAllFolder(@PathVariable String userId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", userId);

        List<FolderDto> list = folderService.getAllFolder(userId);

        log.info("출력 데이터 : {}", list);

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/get/folder/list/{userId}/{folderId}")
    public ResponseEntity<?> getImageByFolder(@PathVariable String userId,
                                                @PathVariable long folderId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", userId);
        log.info("입력 데이터 : {}", folderId);

        List<ImageDto> list = folderService.getImageByFolder(userId, folderId);

        log.info("출력 데이터 : {}", list);

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/get/date/{userId}/{dateTime}")
    public ResponseEntity<?> getFolderByDate(@PathVariable String userId,
                                             @PathVariable String dateTime) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", userId);
        log.info("입력 데이터 : {}", dateTime);

        List<FolderDto> list = folderService.getFolderByDate(userId, dateTime);

        log.info("출력 데이터 : {}", list);

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/get/crack/{folderId}")
    public ResponseEntity<?> getCountCrackByFolder(@PathVariable long folderId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", folderId);

        CountCrackDto countCrackDto = folderService.getCountCrackByFolder(folderId);

        log.info("출력 데이터 : {}", countCrackDto);

        return new ResponseEntity<>(countCrackDto, HttpStatus.OK);
    }

    @GetMapping("/get/folder/crack/{userId}/{folderId}/{crackType}")
    public ResponseEntity<?> getImageByFoderCrack(@PathVariable String userId,
                                                  @PathVariable long folderId,
                                                  @PathVariable String crackType) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", userId);
        log.info("입력 데이터 : {}", folderId);
        log.info("입력 데이터 : {}", crackType);

        List<ImageDto> list = folderService.getImageByFoderCrack(userId, folderId, crackType);

        log.info("출력 데이터 : {}", list);

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/get/detail/folder/{folderId}")
    public ResponseEntity<?> getFolder(@PathVariable long folderId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", folderId);

        FolderDto folderDto = folderService.getFolder(folderId);

        log.info("출력 데이터 : {}", folderDto);

        return new ResponseEntity<>(folderDto, HttpStatus.OK);
    }

    @GetMapping("/get/detail/image/{imageId}")
    public ResponseEntity<?> getImage(@PathVariable long imageId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", imageId);

        ImageDto imageDto = folderService.getImage(imageId);

        log.info("출력 데이터 : {}", imageDto);

        return new ResponseEntity<>(imageDto, HttpStatus.OK);
    }

}
