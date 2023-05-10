package com.ssafy.skyeye.service;

import com.ssafy.skyeye.data.dto.request.FolderRegistDto;
import com.ssafy.skyeye.data.dto.request.FolderUpdateDto;
import com.ssafy.skyeye.data.dto.response.CountCrackDto;
import com.ssafy.skyeye.data.dto.response.FolderByDateDto;
import com.ssafy.skyeye.data.dto.response.FolderDto;
import com.ssafy.skyeye.data.dto.response.ImageDto;

import java.util.List;

public interface FolderService {
    void registFolder(FolderRegistDto folderRegistDto);
    void updateFolder(FolderUpdateDto folderUpdateDto);
    void deleteFolder(long folderId);
    List<FolderDto> getFolderByUserId(String userId);
    List<ImageDto> getImageByFolder(String userId, long folderId);
    List<FolderByDateDto> getFolderByDate(String userId, String dateTime);
    CountCrackDto getCountCrackByFolderId(long folderId);
    List<ImageDto> getImageByFoderCrackType(String userId, long folderId, String crackType);
    FolderDto getFolder(long folderId);
    ImageDto getImage(long imageId);
}
