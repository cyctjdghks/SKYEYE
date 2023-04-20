package com.ssafy.skyeye.service;

import com.ssafy.skyeye.data.dto.request.DroneLoginDto;
import com.ssafy.skyeye.data.dto.request.DroneRegistDto;
import com.ssafy.skyeye.data.dto.request.DroneUpdateDto;
import com.ssafy.skyeye.data.dto.response.DroneDto;

public interface DroneService {
    void registDrone(DroneRegistDto droneRegistDto);
    DroneDto loginDrone(DroneLoginDto droneLoginDto);
    void updateDrone(DroneUpdateDto droneUpdateDto);
    DroneDto getDrone(String droneId);
    void deleteDrone(String droneId);
}
