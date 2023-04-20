package com.ssafy.skyeye.data.dto.response;

import com.ssafy.skyeye.data.entity.Drone;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DroneDto {
    private String droneId;
    private String droneSerialNumber;
    private String userId;

    public static DroneDto entityToDto(Drone drone) {
        return DroneDto.builder()
                .droneId(drone.getDroneId())
                .droneSerialNumber(drone.getDroneSerialNumber())
                .userId(drone.getUserId().getUserId())
                .build();
    }
}
