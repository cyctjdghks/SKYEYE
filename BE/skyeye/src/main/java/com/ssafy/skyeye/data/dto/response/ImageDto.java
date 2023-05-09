package com.ssafy.skyeye.data.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ImageDto {
    private String originalFileName;
    private String storedFileName;
    private Long fileSize;
    private String createTime;
    private String updateTime;
}
