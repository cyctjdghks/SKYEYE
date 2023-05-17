package com.ssafy.skyeye.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CrackUpdateDto {
    private Long crackId;
    private String crackType;
}
