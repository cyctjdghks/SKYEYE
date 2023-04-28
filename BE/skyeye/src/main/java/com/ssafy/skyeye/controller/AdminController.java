package com.ssafy.skyeye.controller;

import com.ssafy.skyeye.data.dto.request.AdminLoginDto;
import com.ssafy.skyeye.data.dto.response.BuildingDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;
import com.ssafy.skyeye.data.dto.response.DroneDto;
import com.ssafy.skyeye.data.dto.response.UserDto;
import com.ssafy.skyeye.service.AdminService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {
    private final AdminService adminService;

    ////////////////////////////////////////////////////////////////////////////////////////////

    @PostMapping("/login")
    public ResponseEntity<?> loginAdmin(@RequestBody AdminLoginDto input){
        log.info("{} 메서드 실행", Thread.currentThread().getStackTrace()[1].getClassName());
        log.info("입력 데이터 : {}", input);

        adminService.loginAdmin(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<?> findUserAll(){
        log.info("{} 메서드 실행", Thread.currentThread().getStackTrace()[1].getClassName());


        List<UserDto> list = adminService.findUserAll();


        log.info("출력 데이터 : {}", list);

        return new ResponseEntity<>(list, HttpStatus.OK);

    }
    @GetMapping("/building")
    public ResponseEntity<?> findBuildingAll(){
        log.info("{} 메서드 실행", Thread.currentThread().getStackTrace()[1].getClassName());


        List<BuildingDto> list = adminService.findBuildingAll();


        log.info("출력 데이터 : {}", list);

        return new ResponseEntity<>(list, HttpStatus.OK);

    }
    @GetMapping("/crack")
    public ResponseEntity<?> findCrackAll(){
        log.info("{} 메서드 실행", Thread.currentThread().getStackTrace()[1].getClassName());


        List<CrackDto> list = adminService.findCrackAll();


        log.info("출력 데이터 : {}", list);

        return new ResponseEntity<>(list, HttpStatus.OK);

    }
    @GetMapping("/drone")
    public ResponseEntity<?> findDroneAll(){
        log.info("{} 메서드 실행", Thread.currentThread().getStackTrace()[1].getClassName());


        List<DroneDto> list = adminService.findDroneAll();


        log.info("출력 데이터 : {}", list);

        return new ResponseEntity<>(list, HttpStatus.OK);

    }

}
