package com.ssafy.skyeye.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BuildingUpdateDto {
    private String buildingEstablishment;
    private String userId;
    private String buildingName;
    private String buildingAddress;
}
