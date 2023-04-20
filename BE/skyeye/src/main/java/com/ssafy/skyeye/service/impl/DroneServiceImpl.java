package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.DroneLoginDto;
import com.ssafy.skyeye.data.dto.request.DroneRegistDto;
import com.ssafy.skyeye.data.dto.request.DroneUpdateDto;
import com.ssafy.skyeye.data.dto.response.DroneDto;
import com.ssafy.skyeye.repository.DroneRepository;
import com.ssafy.skyeye.service.DroneService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DroneServiceImpl implements DroneService {
    private final DroneRepository droneRepository;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registDrone(DroneRegistDto droneRegistDto) {

    }

    @Override
    public DroneDto loginDrone(DroneLoginDto droneLoginDto) {
        return null;
    }

    @Override
    public void updateDrone(DroneUpdateDto droneUpdateDto) {

    }

    @Override
    public DroneDto getDrone(String droneId) {
        return null;
    }

    @Override
    public void deleteDrone(String droneId) {

    }
}
