package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.PwChangeUserDto;
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
import com.ssafy.skyeye.data.exception.UnAuthorizationException;
import com.ssafy.skyeye.repository.BuildingRepository;
import com.ssafy.skyeye.repository.DroneRepository;
import com.ssafy.skyeye.repository.ImageRepository;
import com.ssafy.skyeye.repository.UserRepository;
import com.ssafy.skyeye.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    private final PasswordEncoder passwordEncoder;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registUser(UserRegistDto userRegistDto) {
        Image image = getImageById(userRegistDto.getUserImageId());

        User user = User.builder()
                .userId(userRegistDto.getUserId())
                .userPw(passwordEncoder.encode(userRegistDto.getUserPw()))
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

        if(!passwordEncoder.matches(userLoginDto.getUserPw(),user.getUserPw()))
            throw new UnAuthorizationException("비밀번호가 다릅니다.");


        return UserDto.entityToDto(user);
    }

    @Override
    @Transactional
    public void updateUser(UserUpdateDto userUpdateDto) {
        User user = getUserById(userUpdateDto.getUserId());
        System.out.println(userUpdateDto.getUserImageId());
        if(userUpdateDto.getUserImageId() != null) {
            Image image = getImageById(userUpdateDto.getUserImageId());
            user.setImageId(image);
        }

        // 비밀번호 변경은 따로 처리
//        user.setUserPw(userUpdateDto.getUserPw());
        user.setUserName(userUpdateDto.getUserName());
        user.setUserPosition(userUpdateDto.getUserPosition());
        user.setUserPhoneNumber(userUpdateDto.getUserPhoneNumber());

    }

    @Override
    public void deleteUser(String userId) {
        // TODO: JWT 본인인증 만약 아닐 시 405 Not Allowed
        userRepository.delete(getUserById(userId));
    }

    @Override
    public UserDto getUser(String userId) {
        // TODO: JWT 본인인증 만약 아닐 시 405 Not Allowed
        return UserDto.entityToDto(getUserById(userId));
    }

    @Override
    public List<BuildingDto> getBuildingByUserId(String userId) {
        // TODO: JWT 본인인증 만약 아닐 시 405 Not Allowed
//        if(auth == null) throw new UnAuthorizationException();

        return buildingRepository.findAll().stream()   // 1번 Stream 형태로 만든다.
                .filter(building -> building.getUserId().getUserId().equals(userId)) // 2번 userId와 비교한다.
//                .map(building -> BuildingDto.entityToDto(building))
                .map(BuildingDto::entityToDto)  // 3번 Entity를 Dto로 변환한다.
//                .findAny().or; // findAny()나 findFirst하면 map을 통과한 녀석이 오면 orElse를 처리할 수 있다.
                .collect(Collectors.toList());  // 4번 list에 담는다.

//        List<Building> buildings = {데이터들};
//        List<BuildingDto> buildingDtos = new ArrayList<>();
//        for(Building building : buildings){   // 1번 Stream 형태로 만든다.
//            if(!building.getUserId().getUserId().equals(userId)) continue; // 2번 userId와 비교한다.
//            BuildingDto dto = BuildingDto.entityToDto(building); // 3번 Entity를 Dto로 변환한다.
//            buildingDtos.add(dto); // 4번 list에 담는다.
//        }
    }

    @Override
    public List<DroneDto> getDroneByUserId(String userId) {
        // TODO: JWT 본인인증 만약 아닐 시 405 Not Allowed
        return droneRepository.findAll().stream()
                .filter(drone -> drone.getUserId().getUserId().equals(userId))
                .map(DroneDto::entityToDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void changePw(PwChangeUserDto input) {
        User user = getUserById(input.getUserId());

        if(!passwordEncoder.matches(input.getOldUserPw(), user.getUserPw())){
            throw new ForbiddenException("비밀번호가 틀렸습니다.");
        }

        user.setUserPw(passwordEncoder.encode(input.getNewUserPw()));
    }

    @Override
    public boolean validId(String userId) {
        return userRepository.existsById(userId);
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
