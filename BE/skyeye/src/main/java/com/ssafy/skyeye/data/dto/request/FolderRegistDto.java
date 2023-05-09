package com.ssafy.skyeye.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FolderRegistDto {
    private String folderName;
    private String folderMemo;
    private String userId;
}
