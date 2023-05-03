package com.ssafy.skyeye.controller;

import com.ssafy.skyeye.data.dto.request.*;
import com.ssafy.skyeye.data.dto.response.BuildingDto;
import com.ssafy.skyeye.data.dto.response.DroneDto;
import com.ssafy.skyeye.data.exception.ForbiddenException;
import com.ssafy.skyeye.service.DroneService;
import com.ssafy.skyeye.structure.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/drone")
public class DroneController {

    private final DroneService droneService;
    private final JwtTokenProvider jwtTokenProvider;

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

        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
        if(!jwtId.equals(droneId) && !jwtId.equals("admin")) throw new ForbiddenException("본인 아이디가 아닙니다.");

        DroneDto droneDto = droneService.getDrone(droneId);

        log.info("출력 데이터 : {} ", droneDto);

        return new ResponseEntity<>(droneDto, HttpStatus.OK);
    }

    // 드론 정보 수정
    @PutMapping("/update")
    public ResponseEntity<?> updateDrone(@RequestBody DroneUpdateDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {} ", input);

        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
        if(!jwtId.equals(input.getDroneId()) && !jwtId.equals("admin")) throw new ForbiddenException("본인 아이디가 아닙니다.");

        droneService.updateDrone(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // 드론 삭제
    @DeleteMapping("/delete/{droneId}")
    public ResponseEntity<?> deleteDrone(@PathVariable String droneId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {} ", droneId);

        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
        if(!jwtId.equals(droneId) && !jwtId.equals("admin")) throw new ForbiddenException("본인 아이디가 아닙니다.");

        droneService.deleteDrone(droneId);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // 드론 로그인
    @PostMapping("/login")
    public ResponseEntity<?> loginDrone(@RequestBody DroneLoginDto input, HttpServletResponse response) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {} ", input);


        DroneDto droneDto = droneService.loginDrone(input);

        String auth = jwtTokenProvider.createToken(droneDto);
        Cookie cookie = jwtTokenProvider.createCookie(auth);
        response.addCookie(cookie);

        log.info("출력 데이터 : {}", droneDto);

        return new ResponseEntity<>(droneDto, HttpStatus.OK);
    }

    // 드론 ID로 UserID를 가지고 Building 목록을 들고 오기
    // TODO: QueryDSL이나 Native query 써서 한 번만 DB 조회할 수 있도록 바꿔보기
    @GetMapping("/building/{droneId}")
    public ResponseEntity<?> getBuildingByDroneId(@PathVariable String droneId){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {} ", droneId);

        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
        if(!jwtId.equals(droneId) && !jwtId.equals("admin")) throw new ForbiddenException("본인 아이디가 아닙니다.");

        List<BuildingDto> buildingDtos = droneService.getBuildingByDroneId(droneId);

        log.info("출력 데이터 : {} ", buildingDtos);

        return new ResponseEntity<>(buildingDtos, HttpStatus.OK);
    }

    // 비밀번호 변경
    @PutMapping("/change")
    public ResponseEntity<?> changePw(@RequestBody PwChangeDroneDto input){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
        if(!jwtId.equals(input.getDroneId()) && !jwtId.equals("admin")) throw new ForbiddenException("본인 아이디가 아닙니다.");

        droneService.changePw(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // 드론 id 중복검사
    @GetMapping("/valid/{droneId}")
    public ResponseEntity<?> validId(@PathVariable String droneId){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", droneId);

        boolean exist = droneService.validId(droneId);

        // true 면 아이디가 있는거 false 면 없는거
        log.info("출력 데이터 : {}", exist);

        return new ResponseEntity<>(exist, HttpStatus.OK);
    }

}
