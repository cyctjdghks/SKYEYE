package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.DroneLoginDto;
import com.ssafy.skyeye.data.dto.request.DroneRegistDto;
import com.ssafy.skyeye.data.dto.request.DroneUpdateDto;
import com.ssafy.skyeye.data.dto.response.DroneDto;
import com.ssafy.skyeye.data.entity.Drone;
import com.ssafy.skyeye.data.entity.User;
import com.ssafy.skyeye.data.exception.ForbiddenException;
import com.ssafy.skyeye.repository.DroneRepository;
import com.ssafy.skyeye.repository.UserRepository;
import com.ssafy.skyeye.service.DroneService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class DroneServiceImpl implements DroneService {
    private final DroneRepository droneRepository;

    private final UserRepository userRepository;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registDrone(DroneRegistDto droneRegistDto) {
        Drone drone = Drone.builder()
                .droneId(droneRegistDto.getDroneId())
                .dronePw(droneRegistDto.getDronePw())
                .droneSerialNumber(droneRegistDto.getDroneSerialNumber())
                .userId(getUserById(droneRegistDto.getUserId()))
                .build();

        droneRepository.save(drone);
    }

    @Override
    public DroneDto loginDrone(DroneLoginDto droneLoginDto) {
        Drone drone = getByDroneId(droneLoginDto.getDroneId());

        return DroneDto.entityToDto(drone);
    }

    @Override
    @Transactional
    public void updateDrone(DroneUpdateDto droneUpdateDto) {
        Drone drone = getByDroneId(droneUpdateDto.getDroneId());

        drone.setDroneId(droneUpdateDto.getDroneId());
        drone.setDronePw(droneUpdateDto.getDronePw());
        drone.setDroneSerialNumber(droneUpdateDto.getDroneSerialNumber());
    }

    @Override
    public DroneDto getDrone(String droneId) {
        System.out.println(droneId);
        return DroneDto.entityToDto(getByDroneId(droneId));
    }

    @Override
    public void deleteDrone(String droneId) {
        droneRepository.delete(getByDroneId(droneId));
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    public User getUserById(String userId) {
        return userRepository.findById(userId).orElseThrow(() -> new ForbiddenException("없는 아이디입니다."));
    }

    public Drone getByDroneId(String droneId) {
        return droneRepository.findById(droneId).orElseThrow(() -> new ForbiddenException("없는 아이디입니다."));
    }
}
