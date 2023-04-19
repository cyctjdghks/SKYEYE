package com.ssafy.skyeye.data.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private String userId;
    private String userPw;
    private String userName;
    private String userPosition;
    private String userPhoneNumber;
    private String imageSrc;
}
