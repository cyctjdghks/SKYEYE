package com.ssafy.skyeye.data.dto.response;

import com.ssafy.skyeye.data.entity.Folder;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.format.DateTimeFormatter;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FolderByDateDto {
    private Long folderId;
    private String folderName;
    private String folderMemo;
    private String folderBuilt;
    private String userId;
    private String createTime;
    private String updateTime;
    private Integer countImage;

    public static FolderByDateDto entityToDto(Folder folder) {
        return FolderByDateDto.builder()
                .folderId(folder.getFolderId())
                .folderName(folder.getFolderName())
                .folderMemo(folder.getFolderMemo())
                .folderBuilt(folder.getFolderBuilt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .userId(folder.getUserId().getUserId())
                .createTime(folder.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .updateTime(folder.getUpdatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .countImage(folder.getCracks().size())
                .build();
    }
}
