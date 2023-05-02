package com.ssafy.skyeye.controller;

import com.ssafy.skyeye.data.exception.ForbiddenException;
import com.ssafy.skyeye.data.exception.UnAuthorizationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.format.DateTimeParseException;

@Slf4j
@RestControllerAdvice
public class RestExceptionControllerAdvice {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleAllUncaughtException(Exception e){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<?> handleIllegalArgumentException(Exception e){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ForbiddenException.class)
    public ResponseEntity<?> handleForbiddenException(Exception e){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(UnAuthorizationException.class)
    public ResponseEntity<?> handlerUnAuthorizationException(Exception e){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(DateTimeParseException.class)
    public  ResponseEntity<?> handleDateTimeParseException(Exception e) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        return  new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
}
