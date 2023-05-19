package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.FolderRegistDto;
import com.ssafy.skyeye.data.dto.request.FolderUpdateDto;
import com.ssafy.skyeye.data.dto.response.*;
import com.ssafy.skyeye.data.entity.Folder;
import com.ssafy.skyeye.data.entity.User;
import com.ssafy.skyeye.repository.CrackRepository;
import com.ssafy.skyeye.repository.FolderRepository;
import com.ssafy.skyeye.repository.ImageRepository;
import com.ssafy.skyeye.repository.UserRepository;
import com.ssafy.skyeye.service.FolderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FolderServiceImpl implements FolderService {
    private final FolderRepository folderRepository;
    private final ImageRepository imageRepository;
    private final UserRepository userRepository;
    private final CrackRepository crackRepository;

    final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registFolder(FolderRegistDto folderRegistDto) {
        User user = userRepository.findById(folderRegistDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        Folder folder = Folder.builder()
                .folderName(folderRegistDto.getFolderName())
                .folderMemo(folderRegistDto.getFolderMemo())
                .folderBuilt(LocalDate.parse(folderRegistDto.getFolderBuilt(), formatter).atStartOfDay())
                .userId(user)
                .build();

        folderRepository.save(folder);
    }

    @Override
    @Transactional
    public void updateFolder(FolderUpdateDto folderUpdateDto) {
        Folder folder = folderRepository.findById(folderUpdateDto.getFolderId())
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        User user = userRepository.findById(folderUpdateDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        folder.setFolderName(folderUpdateDto.getFolderName());
        folder.setFolderMemo(folderUpdateDto.getFolderMemo());
        folder.setFolderBuilt(LocalDate.parse(folderUpdateDto.getFolderBuilt(), formatter).atStartOfDay());
        folder.setUserId(user);

    }

    @Override
    public void deleteFolder(long folderId) {
        Folder folder = folderRepository.findById(folderId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        folderRepository.delete(folder);
    }

    @Override
    public List<FolderDto> getFolderByUserId(String userId) {

        return folderRepository.findAll().stream()
                .filter(folder -> folder.getUserId().getUserId().equals(userId))
                .map(FolderDto::entityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ImageDto> getImageByFolder(String userId, long folderId) {

        return crackRepository.findAll().stream()
                .filter(crack -> crack.getFolderId().getUserId().getUserId().equals(userId))
                .filter(crack -> crack.getFolderId().getFolderId().equals(folderId))
                .map(ImageDto::entityToImageDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<FolderByDateDto> getFolderByDate(String userId, String dateTime) {

        return folderRepository.findAll().stream()
                .filter(folder -> folder.getUserId().getUserId().equals(userId))
                .filter(folder -> folder.getFolderBuilt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")).equals(dateTime))
                .map(FolderByDateDto::entityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ImageDto> getImageByFoderCrackType(String userId, long folderId, String crackType) {
        return crackRepository.findAll().stream()
                .filter(crack -> crack.getFolderId().getUserId().getUserId().equals(userId))
                .filter(crack -> crack.getFolderId().getFolderId().equals(folderId))
                .filter(crack -> crack.getCrackType().equals(crackType))
                .map(ImageDto::entityToImageDto)
                .collect(Collectors.toList());
    }

    @Override
    public FolderDto getFolder(long folderId) {
        return folderRepository.findById(folderId)
                .map(FolderDto::entityToDto)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));
    }

    @Override
    public ImageDto getImage(long imageId) {
        Long crackId = crackRepository.findAll().stream()
                .filter(crack -> crack.getImageId().getImageId().equals(imageId))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("사진이 없습니다."))
                .getCrackId();


        return crackRepository.findById(crackId)
                .map(ImageDto::entityToImageDto)
                .orElseThrow(() -> new IllegalArgumentException("사진이 없습니다."));
    }

    @Override
    public List<CrackTypeDto> getCrackTypeByFolderId(long folderId) {
        return crackRepository.countCrackTypesByFolderId(folderId);
    }

    @Override
    public List<CrackDto> getCrackByFolderIdAndCrackType(long folderId, String crackType) {
        return crackRepository.findAll().stream()
                .filter(crack -> crack.getFolderId().getFolderId().equals(folderId))
                .filter(crack -> crack.getCrackType().equals(crackType))
                .map(CrackDto::entityToDto)
                .collect(Collectors.toList());
    }
}
