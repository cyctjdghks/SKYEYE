package com.ssafy.skyeye.service;

import com.ssafy.skyeye.data.dto.request.AdminLoginDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;
import com.ssafy.skyeye.data.dto.response.UserDto;

import java.util.List;

public interface AdminService {
    void loginAdmin(AdminLoginDto adminLoginDto);
    List<UserDto> findUserAll();
    List<CrackDto> findCrackAll();
}
