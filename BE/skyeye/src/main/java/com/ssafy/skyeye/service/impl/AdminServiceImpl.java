package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.AdminLoginDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;
import com.ssafy.skyeye.data.dto.response.UserDto;
import com.ssafy.skyeye.data.exception.ForbiddenException;
import com.ssafy.skyeye.repository.CrackRepository;
import com.ssafy.skyeye.repository.UserRepository;
import com.ssafy.skyeye.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Component
public class AdminServiceImpl implements AdminService {

    @Value("${admin.id}")
    private String adminId;

    @Value("${admin.pw}")
    private String adminPw;

    private final PasswordEncoder passwordEncoder;

    private final UserRepository userRepository;
    private final CrackRepository crackRepository;


    @Override
    public void loginAdmin(AdminLoginDto adminLoginDto) {
        String adminEncodedPw = passwordEncoder.encode(adminPw);
        if (!adminLoginDto.getAdminId().equals(adminId) || !passwordEncoder.matches(adminLoginDto.getAdminPw(), adminEncodedPw))
            throw new ForbiddenException("관리자가 아닙니다.");

    }

    @Override
    public List<UserDto> findUserAll() {

        return userRepository.findAll().stream().map(UserDto::entityToDto).collect(Collectors.toList());

    }


    @Override
    public List<CrackDto> findCrackAll() {

        return crackRepository.findAll().stream().map(CrackDto::entityToDto).collect(Collectors.toList());
    }

}
