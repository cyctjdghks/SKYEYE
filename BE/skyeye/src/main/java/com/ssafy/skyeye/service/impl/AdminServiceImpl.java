package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.AdminLoginDto;
import com.ssafy.skyeye.data.dto.response.BuildingDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;
import com.ssafy.skyeye.data.dto.response.DroneDto;
import com.ssafy.skyeye.data.dto.response.UserDto;
import com.ssafy.skyeye.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
    @Override
    public void loginAdmin(AdminLoginDto adminLoginDto) {

    }

    @Override
    public List<UserDto> findUserAll() {
        return null;
    }

    @Override
    public List<BuildingDto> findBuildingAll() {
        return null;
    }

    @Override
    public List<CrackDto> findCrackAll() {
        return null;
    }

    @Override
    public List<DroneDto> findDroneAll() {
        return null;
    }
}
