package com.ssafy.skyeye.controller;

import com.ssafy.skyeye.data.dto.request.DroneLoginDto;
import com.ssafy.skyeye.data.dto.request.DroneRegistDto;
import com.ssafy.skyeye.data.dto.request.DroneUpdateDto;
import com.ssafy.skyeye.data.dto.response.DroneDto;
import com.ssafy.skyeye.service.DroneService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/drone")
public class DroneController {

    private final DroneService droneService;

    // 드론 등록
    @PostMapping("/regist")
    public ResponseEntity<?> registDrone(@RequestBody DroneRegistDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {} ", input);

        droneService.registDrone(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // 드론 상세 조회
    @GetMapping("/get/{droneId}")
    public ResponseEntity<?> getDrone(@PathVariable String droneId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {} ", droneId);

        Map<String, Object> data = new HashMap<>();
        DroneDto droneDto = droneService.getDrone(droneId);

        data.put("data", droneDto);
        log.info("출력 데이터 : {} ", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    // 드론 정보 수정
    @PostMapping("/update")
    public ResponseEntity<?> updateDrone(@RequestBody DroneUpdateDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {} ", input);

        droneService.updateDrone(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // 드론 삭제
    @DeleteMapping("/delete/{droneId}")
    public ResponseEntity<?> deleteDrone(@PathVariable String droneId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {} ", droneId);

        droneService.deleteDrone(droneId);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // 드론 로그인
    @PostMapping("/login")
    public ResponseEntity<?> loginDrone(@RequestBody DroneLoginDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {} ", input);

        droneService.loginDrone(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
