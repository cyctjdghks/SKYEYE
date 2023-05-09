package com.ssafy.skyeye.data.dto.response;

import com.ssafy.skyeye.data.entity.Crack;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CrackDto {
    private Long crackId;
    private String crackType;
    private String crackPosition;
    private String imageSrc;
    private String folderName;

    public static CrackDto entityToDto(Crack crack) {
        return CrackDto.builder()
                .crackId(crack.getCrackId())
                .crackType(crack.getCrackType())
                .crackPosition(crack.getCrackPosition())
                // 이미지는 null이 들어올 수 있음
                .imageSrc(crack.getImageId()==null ? null : crack.getImageId().getStoredFileName())
                // 빌딩이름은 null이 안됨
                .folderName(crack.getFolderId().getFolderName())
                .build();
    }
}
