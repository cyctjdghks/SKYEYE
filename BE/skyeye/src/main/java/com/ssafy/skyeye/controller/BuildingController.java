package com.ssafy.skyeye.controller;

import com.ssafy.skyeye.data.dto.request.BuildingRegistDto;
import com.ssafy.skyeye.data.dto.request.BuildingUpdateDto;
import com.ssafy.skyeye.data.dto.response.BuildingDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;
import com.ssafy.skyeye.service.BuildingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/building")
public class BuildingController {

    private final BuildingService buildingService;

    ////////////////////////////////////////////////////////////////////////////

    // 빌딩 등록
    @PostMapping("/regist")
    public ResponseEntity<?> registBuilding(@RequestBody BuildingRegistDto input){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {} ", input);

        buildingService.registBuilding(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // 빌딩 상세 조회
    @GetMapping("/get/{buildingId}")
    public ResponseEntity<?> getBuilding(@PathVariable Long buildingId){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {} ", buildingId);


        BuildingDto buildingDto = buildingService.getBuilding(buildingId);


        log.info("출력 데이터 : {}", buildingDto);

        return new ResponseEntity<>(buildingDto, HttpStatus.OK);
    }

    // 빌딩 정보 수정
    @PutMapping("/update")
    public ResponseEntity<?> updateBuilding(@RequestBody BuildingUpdateDto input){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {} ", input);

        buildingService.updateBuilding(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // 빌딩 삭제
    @DeleteMapping("/delete/{buildingId}")
    public ResponseEntity<?> deleteBuilding(@PathVariable Long buildingId){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {} ", buildingId);

        buildingService.deleteBuilding(buildingId);

        return new ResponseEntity<>(null, HttpStatus.OK);

    }


    // 빌딩 ID로 균열 조회
    @GetMapping("/crack/{buildingId}")
    public ResponseEntity<?> getCrackByBuildingId(@PathVariable Long buildingId){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {} ", buildingId);


        List<CrackDto> building = buildingService.getBuildingByCrackId(buildingId);


        log.info("출력 데이터 : {}", building);

        return new ResponseEntity<>(building,HttpStatus.OK);
    }


}
