package com.ssafy.skyeye.service;

import com.ssafy.skyeye.data.dto.request.UserLoginDto;
import com.ssafy.skyeye.data.dto.request.UserRegistDto;
import com.ssafy.skyeye.data.dto.request.UserUpdateDto;
import com.ssafy.skyeye.data.dto.response.BuildingDto;
import com.ssafy.skyeye.data.dto.response.DroneDto;
import com.ssafy.skyeye.data.dto.response.UserDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UserService {
    void registUser(MultipartFile multipartFile, UserRegistDto userRegistDto);
    UserDto loginUser(UserLoginDto userLoginDto);
    void updateUser(MultipartFile multipartFile, UserUpdateDto userUpdateDto);
    void deleteUser(String userId);
    UserDto getUser(String userId);
    List<BuildingDto> getBuildingByUserId(String userId);
    List<DroneDto> getDroneByUserId(String userId);
}
