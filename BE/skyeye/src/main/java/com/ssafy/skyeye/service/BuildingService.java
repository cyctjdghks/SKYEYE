package com.ssafy.skyeye.service;

import com.ssafy.skyeye.data.dto.request.BuildingRegistDto;
import com.ssafy.skyeye.data.dto.request.BuildingUpdateDto;
import com.ssafy.skyeye.data.dto.response.BuildingDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;

import java.util.List;

public interface BuildingService {
    void registBuilding(BuildingRegistDto buildingRegistDto);
    void updateBuilding(BuildingUpdateDto buildingUpdateDto);
    void deleteBuilding(String buildingId);
    List<CrackDto> getBuildingByCrackId(String buildingId);
    BuildingDto getBuilding(String buildingId);
}
