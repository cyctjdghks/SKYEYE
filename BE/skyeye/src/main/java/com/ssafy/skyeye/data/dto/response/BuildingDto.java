package com.ssafy.skyeye.data.dto.response;

import com.ssafy.skyeye.data.entity.Building;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.format.DateTimeFormatter;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BuildingDto {
    private Long buildingId;
    private String buildingEstablishment;
    private String userId;
    private String buildingName;
    private String buildingAddress;

    public static BuildingDto entityToDto(Building building) {
        return BuildingDto.builder()
                .buildingId(building.getBuildingId())
                .buildingEstablishment(building.getBuildingEstablishment().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")))
                .userId(building.getUserId().getUserId())
                .buildingName(building.getBuildingName())
                .buildingAddress(building.getBuildingAddress())
                .build();
    }
}
