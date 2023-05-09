package com.ssafy.skyeye.data.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FolderDto {
    private Long folderId;
    private String folderName;
    private String folderMemo;
    private String userId;
    private String createTime;
    private String updateTime;
}
