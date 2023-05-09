package com.ssafy.skyeye.service;

import com.ssafy.skyeye.data.dto.request.PwChangeUserDto;
import com.ssafy.skyeye.data.dto.request.UserLoginDto;
import com.ssafy.skyeye.data.dto.request.UserRegistDto;
import com.ssafy.skyeye.data.dto.request.UserUpdateDto;
import com.ssafy.skyeye.data.dto.response.UserDto;

import java.util.List;

public interface UserService {
    void registUser(UserRegistDto userRegistDto);
    UserDto loginUser(UserLoginDto userLoginDto);
    UserDto updateUser(UserUpdateDto userUpdateDto);
    void deleteUser(String userId);
    UserDto getUser(String userId);
    void changePw(PwChangeUserDto input);

    boolean validId(String userId);
}
