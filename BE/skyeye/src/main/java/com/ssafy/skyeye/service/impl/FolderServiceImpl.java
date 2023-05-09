package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.FolderRegistDto;
import com.ssafy.skyeye.data.dto.request.FolderUpdateDto;
import com.ssafy.skyeye.data.dto.response.CountCrackDto;
import com.ssafy.skyeye.data.dto.response.FolderDto;
import com.ssafy.skyeye.data.dto.response.ImageDto;
import com.ssafy.skyeye.service.FolderService;

import java.util.List;

public class FolderServiceImpl implements FolderService {
    @Override
    public void registFolder(FolderRegistDto folderRegistDto) {

    }

    @Override
    public void updateFolder(FolderUpdateDto folderUpdateDto) {

    }

    @Override
    public void deleteFolder(long folderId) {

    }

    @Override
    public List<FolderDto> getAllFolder(String userId) {
        return null;
    }

    @Override
    public List<ImageDto> getImageByFolder(String userId, long folderId) {
        return null;
    }

    @Override
    public List<FolderDto> getFolderByDate(String userId, String dateTime) {
        return null;
    }

    @Override
    public CountCrackDto getCountCrackByFolder(long folderId) {
        return null;
    }

    @Override
    public List<ImageDto> getImageByFoderCrack(String userId, long folderId, int crackType) {
        return null;
    }

    @Override
    public FolderDto getFolder(long folderId) {
        return null;
    }

    @Override
    public ImageDto getImage(long imageId) {
        return null;
    }
}
