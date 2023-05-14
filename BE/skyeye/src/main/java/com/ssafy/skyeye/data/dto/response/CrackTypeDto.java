package com.ssafy.skyeye.data.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CrackTypeDto {
    private String crackType;
    private Long countCrack;
}
