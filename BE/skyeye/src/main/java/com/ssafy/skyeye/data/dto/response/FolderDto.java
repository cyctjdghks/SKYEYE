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
public class FolderDto {
    private Long folderId;
    private String folderName;
    private String folderMemo;
    private String userId;
    private String createTime;
    private String updateTime;

    public static FolderDto entityToDto(Folder folder) {
        return FolderDto.builder()
                .folderId(folder.getFolderId())
                .folderName(folder.getFolderName())
                .folderMemo(folder.getFolderMemo())
                .userId(folder.getUserId().getUserId())
                .createTime(folder.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyyMMdd")))
                .updateTime(folder.getUpdatedAt().format(DateTimeFormatter.ofPattern("yyyyMMdd")))
                .build();
    }
}
