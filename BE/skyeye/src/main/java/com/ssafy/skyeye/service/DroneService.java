package com.ssafy.skyeye.service;

import com.ssafy.skyeye.data.dto.request.DroneLoginDto;
import com.ssafy.skyeye.data.dto.request.DroneRegistDto;
import com.ssafy.skyeye.data.dto.request.DroneUpdateDto;
import com.ssafy.skyeye.data.dto.request.PwChangeDroneDto;
import com.ssafy.skyeye.data.dto.response.BuildingDto;
import com.ssafy.skyeye.data.dto.response.DroneDto;

import java.util.List;

public interface DroneService {
    void registDrone(DroneRegistDto droneRegistDto);
    DroneDto loginDrone(DroneLoginDto droneLoginDto);
    void updateDrone(DroneUpdateDto droneUpdateDto);
    DroneDto getDrone(String droneId);
    void deleteDrone(String droneId);

    List<BuildingDto> getBuildingByDroneId(String droneId);

    void changePw(PwChangeDroneDto input);

    boolean validId(String droneId);
}
