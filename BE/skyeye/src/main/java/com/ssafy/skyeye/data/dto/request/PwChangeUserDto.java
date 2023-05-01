package com.ssafy.skyeye.data.dto.request;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PwChangeUserDto {

    private String userId;
    private String oldUserPw;
    private String newUserPw;

}
