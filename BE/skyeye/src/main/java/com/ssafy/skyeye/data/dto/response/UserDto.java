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
    private String userName;
    private String userPosition;
    private String userPhoneNumber;
    private String imageSrc;

    public static UserDto entityToDto(User user) {
        return UserDto.builder()
                .userId(user.getUserId())
                .userName(user.getUserName())
                .userPosition(user.getUserPosition())
                .userPhoneNumber(user.getUserPhoneNumber())
                // 이미지는 null이 들어올 수 있음
                .imageSrc(user.getImageId() == null ? null : user.getImageId().getStoredFileName())
                .build();
    }
}
