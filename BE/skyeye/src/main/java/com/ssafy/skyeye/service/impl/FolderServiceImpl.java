package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.FolderRegistDto;
import com.ssafy.skyeye.data.dto.request.FolderUpdateDto;
import com.ssafy.skyeye.data.dto.response.CountCrackDto;
import com.ssafy.skyeye.data.dto.response.FolderDto;
import com.ssafy.skyeye.data.dto.response.ImageDto;
import com.ssafy.skyeye.data.entity.Folder;
import com.ssafy.skyeye.data.entity.Image;
import com.ssafy.skyeye.data.entity.User;
import com.ssafy.skyeye.data.exception.ForbiddenException;
import com.ssafy.skyeye.repository.CrackRepository;
import com.ssafy.skyeye.repository.FolderRepository;
import com.ssafy.skyeye.repository.ImageRepository;
import com.ssafy.skyeye.repository.UserRepository;
import com.ssafy.skyeye.service.FolderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
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

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registFolder(FolderRegistDto folderRegistDto) {
        User user = userRepository.findById(folderRegistDto.getUserId())
                .orElseThrow(() -> new ForbiddenException("아이디가 없습니다."));

        Folder folder = Folder.builder()
                .folderName(folderRegistDto.getFolderName())
                .folderMemo(folderRegistDto.getFolderMemo())
                .folderBuilt(LocalDateTime.parse(folderRegistDto.getFolderBuilt(), formatter))
                .userId(user)
                .build();

        folderRepository.save(folder);
    }

    @Override
    @Transactional
    public void updateFolder(FolderUpdateDto folderUpdateDto) {
        Folder folder = folderRepository.findById(folderUpdateDto.getFolderId())
                .orElseThrow(() -> new ForbiddenException("아이디가 없습니다."));

        User user = userRepository.findById(folderUpdateDto.getUserId())
                .orElseThrow(() -> new ForbiddenException("아이디가 없습니다."));

        folder.setFolderName(folderUpdateDto.getFolderName());
        folder.setFolderMemo(folderUpdateDto.getFolderMemo());
        folder.setFolderBuilt(LocalDateTime.parse(folderUpdateDto.getFolderBuilt(), formatter));
        folder.setUserId(user);

    }

    @Override
    public void deleteFolder(long folderId) {
        Folder folder = folderRepository.findById(folderId)
                .orElseThrow(() -> new ForbiddenException("아이디가 없습니다."));

        folderRepository.delete(folder);
    }

    @Override
    public List<FolderDto> getAllFolder(String userId) {

        return folderRepository.findAll().stream()
                .filter(folder -> folder.getUserId().equals(userId))
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
    public List<FolderDto> getFolderByDate(String userId, String dateTime) {

        return folderRepository.findAll().stream()
                .filter(folder -> folder.getUserId().equals(userId))
                .filter(folder -> folder.getFolderBuilt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")).equals(dateTime))
                .map(FolderDto::entityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public CountCrackDto getCountCrackByFolder(long folderId) {
        CountCrackDto countCrackDto = new CountCrackDto();

        int type1 = (int) crackRepository.findAll().stream()
                .filter(crack -> crack.getFolderId().getFolderId().equals(folderId))
                .filter(crack -> crack.getCrackType().equals("concrete"))
                .count();

        int type2 = (int) crackRepository.findAll().stream()
                .filter(crack -> crack.getFolderId().getFolderId().equals(folderId))
                .filter(crack -> crack.getCrackType().equals("asphalt"))
                .count();



        countCrackDto.setCountType1(type1);
        countCrackDto.setCountType2(type2);

        return countCrackDto;
    }

    @Override
    public List<ImageDto> getImageByFoderCrack(String userId, long folderId, String crackType) {
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
                .orElseThrow(() -> new ForbiddenException("아이디가 없습니다."));
    }

    @Override
    public ImageDto getImage(long imageId) {

        return imageRepository.findById(imageId)
                .map(ImageDto::entityToDto)
                .orElseThrow(() -> new ForbiddenException("사진이 없습니다."));
    }
}
