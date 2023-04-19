package com.ssafy.skyeye.data.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BuildingDto {
    private Long buildingId;
    private String buildingEstablishment;
    private String userId;
    private String buildingName;
    private String buildingAddress;
}
