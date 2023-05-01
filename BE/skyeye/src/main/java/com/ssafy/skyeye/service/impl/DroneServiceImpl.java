package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.DroneLoginDto;
import com.ssafy.skyeye.data.dto.request.DroneRegistDto;
import com.ssafy.skyeye.data.dto.request.DroneUpdateDto;
import com.ssafy.skyeye.data.dto.request.PwChangeDroneDto;
import com.ssafy.skyeye.data.dto.response.BuildingDto;
import com.ssafy.skyeye.data.dto.response.DroneDto;
import com.ssafy.skyeye.data.entity.Drone;
import com.ssafy.skyeye.data.entity.User;
import com.ssafy.skyeye.data.exception.ForbiddenException;
import com.ssafy.skyeye.data.exception.UnAuthorizationException;
import com.ssafy.skyeye.repository.BuildingRepository;
import com.ssafy.skyeye.repository.DroneRepository;
import com.ssafy.skyeye.repository.UserRepository;
import com.ssafy.skyeye.service.DroneService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DroneServiceImpl implements DroneService {
    private final DroneRepository droneRepository;

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final BuildingRepository buildingRepository;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registDrone(DroneRegistDto droneRegistDto) {
        Drone drone = Drone.builder()
                .droneId(droneRegistDto.getDroneId())
                .dronePw(passwordEncoder.encode(droneRegistDto.getDronePw()))
                .droneSerialNumber(droneRegistDto.getDroneSerialNumber())
                .userId(getUserById(droneRegistDto.getUserId()))
                .build();

        droneRepository.save(drone);
    }

    @Override
    public DroneDto loginDrone(DroneLoginDto droneLoginDto) {
        Drone drone = getDroneById(droneLoginDto.getDroneId());

        if(!passwordEncoder.matches(droneLoginDto.getDronePw(), drone.getDronePw()))
            throw new UnAuthorizationException("비밀번호가 다릅니다.");

        return DroneDto.entityToDto(drone);
    }

    @Override
    @Transactional
    public void updateDrone(DroneUpdateDto droneUpdateDto) {
        // TODO: JWT 본인인증 만약 아닐 시 405 Not Allowed
        Drone drone = getDroneById(droneUpdateDto.getDroneId());

        drone.setDroneId(droneUpdateDto.getDroneId());
        // 비밀번호는 다른 메서드에서 처리
//        drone.setDronePw(droneUpdateDto.getDronePw());
        drone.setDroneSerialNumber(droneUpdateDto.getDroneSerialNumber());
    }

    @Override
    public DroneDto getDrone(String droneId) {
        // TODO: JWT 본인인증 만약 아닐 시 405 Not Allowed
        System.out.println(droneId);
        return DroneDto.entityToDto(getDroneById(droneId));
    }

    @Override
    public void deleteDrone(String droneId) {
        // TODO: JWT 본인인증 만약 아닐 시 405 Not Allowed
        droneRepository.delete(getDroneById(droneId));
    }

    @Override
    public List<BuildingDto> getBuildingByDroneId(String droneId) {

        Drone drone = getDroneById(droneId);


        return buildingRepository.findAll().stream()
                .filter(building -> building.getUserId().getUserId().equals(drone.getUserId().getUserId()))
                .map(BuildingDto::entityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public void changePw(PwChangeDroneDto input) {
        Drone drone = getDroneById(input.getDroneId());

        if(!passwordEncoder.matches(input.getOldDronePw(), drone.getDronePw())){
            throw new ForbiddenException("비밀번호가 틀렸습니다.");
        }

        drone.setDronePw(passwordEncoder.encode(input.getNewDronePw()));
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    public User getUserById(String userId) {
        return userRepository.findById(userId).orElseThrow(() -> new ForbiddenException("없는 아이디입니다."));
    }

    public Drone getDroneById(String droneId) {
        return droneRepository.findById(droneId).orElseThrow(() -> new ForbiddenException("없는 아이디입니다."));
    }

}
