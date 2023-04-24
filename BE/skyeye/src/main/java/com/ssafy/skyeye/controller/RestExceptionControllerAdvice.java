package com.ssafy.skyeye.controller;

import com.ssafy.skyeye.data.exception.ForbiddenException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.awt.*;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestControllerAdvice
public class RestExceptionControllerAdvice {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleAllUncaughtException(Exception e){

        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<?> handleIllegalArgumentException(Exception e){

        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ForbiddenException.class)
    public ResponseEntity<?> handleForbbidenException(Exception e){

        return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
    }

}
