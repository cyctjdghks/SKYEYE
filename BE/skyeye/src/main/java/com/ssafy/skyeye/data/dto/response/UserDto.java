package com.ssafy.skyeye.data.dto.response;

import com.ssafy.skyeye.data.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private String userId;
    private String userPw;
    private String userName;
    private String userPosition;
    private String userPhoneNumber;
    private String imageSrc;

    public static UserDto entityToDto(User user) {
        return UserDto.builder()
                .userId(user.getUserId())
                .userPw(user.getUserPw())
                .userName(user.getUserName())
                .userPosition(user.getUserPosition())
                .userPhoneNumber(user.getUserPhoneNumber())
                .imageSrc(user.getImageId().getStoredFileName())
                .build();
    }
}
