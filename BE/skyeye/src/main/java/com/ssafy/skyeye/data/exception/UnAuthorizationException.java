package com.ssafy.skyeye.data.exception;

public class UnAuthorizationException extends RuntimeException{
    public UnAuthorizationException(String msg){
        super(msg);
    }
}
