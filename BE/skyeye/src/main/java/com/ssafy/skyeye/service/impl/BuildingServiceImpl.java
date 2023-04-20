package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.BuildingRegistDto;
import com.ssafy.skyeye.data.dto.request.BuildingUpdateDto;
import com.ssafy.skyeye.data.dto.response.BuildingDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;
import com.ssafy.skyeye.repository.BuildingRepository;
import com.ssafy.skyeye.service.BuildingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BuildingServiceImpl implements BuildingService {
    private final BuildingRepository buildingRepository;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registBuilding(BuildingRegistDto buildingRegistDto) {

    }

    @Override
    public void updateBuilding(BuildingUpdateDto buildingUpdateDto) {

    }

    @Override
    public void deleteBuilding(String buildingId) {

    }

    @Override
    public List<CrackDto> getBuildingByCrackId(String buildingId) {
        return null;
    }

    @Override
    public BuildingDto getBuilding(String buildingId) {
        return null;
    }
}
