package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.UserLoginDto;
import com.ssafy.skyeye.data.dto.request.UserRegistDto;
import com.ssafy.skyeye.data.dto.request.UserUpdateDto;
import com.ssafy.skyeye.data.dto.response.BuildingDto;
import com.ssafy.skyeye.data.dto.response.DroneDto;
import com.ssafy.skyeye.data.dto.response.UserDto;
import com.ssafy.skyeye.repository.UserRepository;
import com.ssafy.skyeye.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registUser(MultipartFile multipartFile, UserRegistDto userRegistDto) {

    }

    @Override
    public UserDto loginUser(UserLoginDto userLoginDto) {
        return null;
    }

    @Override
    public void updateUser(MultipartFile multipartFile, UserUpdateDto userUpdateDto) {

    }

    @Override
    public void deleteUser(String userId) {

    }

    @Override
    public UserDto getUser(String userId) {
        return null;
    }

    @Override
    public List<BuildingDto> getBuildingByUserId(String userId) {
        return null;
    }

    @Override
    public List<DroneDto> getDroneByUserId(String userId) {
        return null;
    }
}
