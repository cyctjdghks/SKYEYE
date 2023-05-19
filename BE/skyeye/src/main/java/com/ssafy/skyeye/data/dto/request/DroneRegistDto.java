package com.ssafy.skyeye.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DroneRegistDto {
    private String droneId;
    private String dronePw;
    private String droneSerialNumber;
    private String userId;
}
