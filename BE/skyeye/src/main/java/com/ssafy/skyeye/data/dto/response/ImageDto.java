package com.ssafy.skyeye.data.dto.response;

import com.ssafy.skyeye.data.entity.Crack;
import com.ssafy.skyeye.data.entity.Image;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.format.DateTimeFormatter;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ImageDto {
    private String originalFileName;
    private String storedFileName;
    private Long fileSize;
    private String createTime;
    private String updateTime;

    public static ImageDto entityToDto(Image image) {
        return ImageDto.builder()
                .originalFileName(image.getOriginalFileName())
                .storedFileName(image.getStoredFileName())
                .fileSize(image.getFileSize())
                .createTime(image.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .updateTime(image.getUpdatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .build();
    }

    public static ImageDto entityToImageDto(Crack crack) {
        Image image = crack.getImageId();

        return ImageDto.builder()
                .originalFileName(image.getOriginalFileName())
                .storedFileName(image.getStoredFileName())
                .fileSize(image.getFileSize())
                .createTime(image.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .updateTime(image.getUpdatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .build();
    }
}
