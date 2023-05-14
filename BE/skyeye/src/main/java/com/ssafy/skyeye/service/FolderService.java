package com.ssafy.skyeye.service;

import com.ssafy.skyeye.data.dto.request.FolderRegistDto;
import com.ssafy.skyeye.data.dto.request.FolderUpdateDto;
import com.ssafy.skyeye.data.dto.response.*;

import java.util.List;

public interface FolderService {
    void registFolder(FolderRegistDto folderRegistDto);
    void updateFolder(FolderUpdateDto folderUpdateDto);
    void deleteFolder(long folderId);
    List<FolderDto> getFolderByUserId(String userId);
    List<ImageDto> getImageByFolder(String userId, long folderId);
    List<FolderByDateDto> getFolderByDate(String userId, String dateTime);
    List<ImageDto> getImageByFoderCrackType(String userId, long folderId, String crackType);
    FolderDto getFolder(long folderId);
    ImageDto getImage(long imageId);
    List<CrackTypeDto> getCrackTypeByFolderId(long folderId);
    List<CrackDto> getCrackByFolderIdAndCrackType(long folderId, String crackType);
}
