package com.ssafy.skyeye.data.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CrackDto {
    private String droneId;
    private String dronePw;
    private String droneSerialNumber;
    private String userId;
}
