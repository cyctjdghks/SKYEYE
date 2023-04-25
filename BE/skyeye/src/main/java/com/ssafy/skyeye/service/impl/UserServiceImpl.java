package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.UserLoginDto;
import com.ssafy.skyeye.data.dto.request.UserRegistDto;
import com.ssafy.skyeye.data.dto.request.UserUpdateDto;
import com.ssafy.skyeye.data.dto.response.BuildingDto;
import com.ssafy.skyeye.data.dto.response.DroneDto;
import com.ssafy.skyeye.data.dto.response.UserDto;
import com.ssafy.skyeye.data.entity.Building;
import com.ssafy.skyeye.data.entity.Image;
import com.ssafy.skyeye.data.entity.User;
import com.ssafy.skyeye.data.exception.ForbiddenException;
import com.ssafy.skyeye.repository.BuildingRepository;
import com.ssafy.skyeye.repository.DroneRepository;
import com.ssafy.skyeye.repository.ImageRepository;
import com.ssafy.skyeye.repository.UserRepository;
import com.ssafy.skyeye.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final ImageRepository imageRepository;
    private final BuildingRepository buildingRepository;
    private final DroneRepository droneRepository;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registUser(UserRegistDto userRegistDto) {
        Image image = getImageById(userRegistDto.getUserImageId());

        User user = User.builder()
                .userId(userRegistDto.getUserId())
                .userPw(userRegistDto.getUserPw())
                .userName(userRegistDto.getUserName())
                .userPosition(userRegistDto.getUserPosition())
                .userPhoneNumber(userRegistDto.getUserPhoneNumber())
                .imageId(image)
                .build();

        userRepository.save(user);
    }

    @Override
    public UserDto loginUser(UserLoginDto userLoginDto) {
        User user = getUserById(userLoginDto.getUserId());

        return UserDto.entityToDto(user);
    }

    @Override
    @Transactional
    public void updateUser(UserUpdateDto userUpdateDto) {
        User user = getUserById(userUpdateDto.getUserId());

        user.setUserPw(userUpdateDto.getUserPw());
        user.setUserName(userUpdateDto.getUserName());
        user.setUserPosition(userUpdateDto.getUserPosition());
        user.setUserPhoneNumber(userUpdateDto.getUserPhoneNumber());

    }

    @Override
    public void deleteUser(String userId) {

        userRepository.delete(getUserById(userId));
    }

    @Override
    public UserDto getUser(String userId) {

        return UserDto.entityToDto(getUserById(userId));
    }

    @Override
    public List<BuildingDto> getBuildingByUserId(String userId) {

        return buildingRepository.findAll().stream()
                .filter(building -> building.getUserId().getUserId().equals(userId))
//                .map(building -> BuildingDto.entityToDto(building))
                .map(BuildingDto::entityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<DroneDto> getDroneByUserId(String userId) {
        return droneRepository.findAll().stream()
                .filter(drone -> drone.getUserId().getUserId().equals(userId))
                .map(DroneDto::entityToDto)
                .collect(Collectors.toList());
    }


    //////////////////////////////////////////////////////////////////////////////////////////////
    // repository 접근하는 것들 모아두기
    public Image getImageById(Long imageId){
        if(imageId == null) return null;
        return imageRepository.findById(imageId)
                .orElse(null);
    }

    public User getUserById(String userId){
        return userRepository.findById(userId)
                .orElseThrow(() -> new ForbiddenException("아이디가 없습니다."));

    }
}
