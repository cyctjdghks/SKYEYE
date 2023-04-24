package com.ssafy.skyeye.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserUpdateDto {
    private String userId;
    private String userPw;
    private String userName;
    private String userPosition;
    private String userPhoneNumber;
    private Long userImageId;
}
