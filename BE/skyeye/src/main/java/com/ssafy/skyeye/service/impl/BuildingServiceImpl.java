package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.BuildingRegistDto;
import com.ssafy.skyeye.data.dto.request.BuildingUpdateDto;
import com.ssafy.skyeye.data.dto.response.BuildingDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;
import com.ssafy.skyeye.data.entity.Building;
import com.ssafy.skyeye.data.entity.User;
import com.ssafy.skyeye.data.exception.ForbiddenException;
import com.ssafy.skyeye.repository.BuildingRepository;
import com.ssafy.skyeye.repository.CrackRepository;
import com.ssafy.skyeye.repository.UserRepository;
import com.ssafy.skyeye.service.BuildingService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BuildingServiceImpl implements BuildingService {
    private final BuildingRepository buildingRepository;

    private final UserRepository userRepository;

    private final CrackRepository crackRepository;

    // 날짜 포매터
    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registBuilding(BuildingRegistDto buildingRegistDto) {
        // TODO: JWT 본인인증 만약 아닐 시 405 Not Allowed

//        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
//        if(!jwtId.equals(buildingRegistDto.getUserId()) && !jwtId.equals("admin")) throw new ForbiddenException("본인 아이디가 아닙니다.");

        if(buildingRepository.existsByBuildingAddress(buildingRegistDto.getBuildingAddress())){
            throw new ForbiddenException("이미 있는 건물입니다.");
        }

        Building building = Building.builder()
                .buildingAddress(buildingRegistDto.getBuildingAddress())
                .buildingEstablishment(LocalDate.parse(buildingRegistDto.getBuildingEstablishment(), formatter).atStartOfDay())
                .buildingName(buildingRegistDto.getBuildingName())
                .userId(getUserById(buildingRegistDto.getUserId()))
                .build();

        buildingRepository.save(building);

    }

    @Override
    @Transactional
    public void updateBuilding(BuildingUpdateDto buildingUpdateDto) {
//        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
//        if(!jwtId.equals(buildingUpdateDto.getUserId()) && !jwtId.equals("admin")) throw new ForbiddenException("본인 아이디가 아닙니다.");

        Building building = getByBuildingId(buildingUpdateDto.getBuildingId());
        // TODO: JWT 본인인증 만약 아닐 시 405 Not Allowed

        building.setBuildingAddress(buildingUpdateDto.getBuildingAddress());
        building.setBuildingName(buildingUpdateDto.getBuildingName());
        building.setBuildingEstablishment(LocalDateTime.parse(buildingUpdateDto.getBuildingEstablishment(), formatter));
    }

    @Override
    public void deleteBuilding(Long buildingId) {
        // TODO: JWT 본인인증 만약 아닐 시 405 Not Allowed

//        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
//        if(!jwtId.equals(getByBuildingId(buildingId).getUserId().getUserId()) && !jwtId.equals("admin")) throw new ForbiddenException("본인 아이디가 아닙니다.");

        buildingRepository.delete(getByBuildingId(buildingId));
    }

    @Override
    public List<CrackDto> getBuildingByCrackId(Long buildingId) {
        // TODO: JWT 본인인증 만약 아닐 시 405 Not Allowed
//        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
//        if(!jwtId.equals(getByBuildingId(buildingId).getUserId().getUserId()) && !jwtId.equals("admin")) throw new ForbiddenException("본인 아이디가 아닙니다.");

        return crackRepository.findAll().stream()
                .filter(crack -> crack.getBuildingId().getBuildingId().equals(buildingId))
                .map(CrackDto :: entityToDto)
                .collect(Collectors.toList());

    }

    @Override
    public BuildingDto getBuilding(Long buildingId) {
        // TODO: JWT 본인인증 만약 아닐 시 405 Not Allowed
//        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
//        if(!jwtId.equals(getByBuildingId(buildingId).getUserId().getUserId()) && !jwtId.equals("admin")) throw new ForbiddenException("본인 아이디가 아닙니다.");

        return BuildingDto.entityToDto(getByBuildingId(buildingId));

    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    public Building getByBuildingId(Long buildingId){
        return buildingRepository.findById(buildingId)
                .orElseThrow(() -> new ForbiddenException("없는 아이디입니다."));
    }

    public User getUserById(String userId){
        return userRepository.findById(userId)
                .orElseThrow(() -> new ForbiddenException("없는 아이디입니다."));
    }
}
