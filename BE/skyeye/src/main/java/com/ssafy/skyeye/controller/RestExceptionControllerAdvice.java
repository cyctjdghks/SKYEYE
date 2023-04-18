package com.ssafy.skyeye.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestControllerAdvice
public class RestExceptionControllerAdvice {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleAllUncaughtException(Exception e){
        Map<String, Object> data = new HashMap<>();

        data.put("msg", "fail");

        return new ResponseEntity<>(data, HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<?> handleIllegalArgumentException(Exception e){
        Map<String, Object> data = new HashMap<>();

        data.put("msg", "fail");

        return new ResponseEntity<>(data, HttpStatus.BAD_REQUEST);
    }
}
