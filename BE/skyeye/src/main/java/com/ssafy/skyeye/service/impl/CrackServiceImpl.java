package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.CrackRegistDto;
import com.ssafy.skyeye.data.dto.request.CrackUpdateDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;
import com.ssafy.skyeye.data.entity.Building;
import com.ssafy.skyeye.data.entity.Crack;
import com.ssafy.skyeye.data.entity.Image;
import com.ssafy.skyeye.data.exception.ForbiddenException;
import com.ssafy.skyeye.repository.BuildingRepository;
import com.ssafy.skyeye.repository.CrackRepository;
import com.ssafy.skyeye.repository.ImageRepository;
import com.ssafy.skyeye.service.CrackService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CrackServiceImpl implements CrackService {
    private final CrackRepository crackRepository;

    private final ImageRepository imageRepository;

    private final BuildingRepository buildingRepository;


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registCrack(CrackRegistDto crackRegistDto) {
        Image image = getImageById(crackRegistDto.getImageId());
        Building building = getBuildingById(crackRegistDto.getBuildingId());

        Crack crack = Crack.builder()
                .crackType(crackRegistDto.getCrackType())
                .crackPosition(crackRegistDto.getCrackPosition())
                .imageId(image)
                .buildingId(building)
                .build();

        crackRepository.save(crack);
    }

    @Override
    public CrackDto getCrack(Long crackId) {

        return CrackDto.entityToDto(getCrackById(crackId));
    }

    @Override
    public void updateCrack(CrackUpdateDto crackUpdateDto) {
        Crack crack = getCrackById(crackUpdateDto.getCrackId());

        crack.setCrackPosition(crackUpdateDto.getCrackPosition());
        crack.setCrackType(crackUpdateDto.getCrackType());
    }

    @Override
    public void deleteCrack(Long crackId) {

        crackRepository.delete(getCrackById(crackId));
    }

    ////////////////////////////////////////////////////////////////////////////////////////////
    public Image getImageById(Long imageId){
        if(imageId == null) return null;
        return imageRepository.findById(imageId)
                .orElse(null);
    }

    public Crack getCrackById(Long crackId){
        return crackRepository.findById(crackId)
                .orElseThrow(() -> new ForbiddenException("아이디가 없습니다."));

    }

    public Building getBuildingById(Long buildingId){
        return buildingRepository.findById(buildingId)
                .orElseThrow(() -> new ForbiddenException("건물이 없습니다."));
    }
}
