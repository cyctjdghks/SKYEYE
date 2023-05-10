package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.CrackRegistDto;
import com.ssafy.skyeye.data.dto.request.CrackUpdateDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;
import com.ssafy.skyeye.data.entity.Crack;
import com.ssafy.skyeye.data.entity.Folder;
import com.ssafy.skyeye.data.entity.Image;
import com.ssafy.skyeye.data.exception.ForbiddenException;
import com.ssafy.skyeye.repository.CrackRepository;
import com.ssafy.skyeye.repository.FolderRepository;
import com.ssafy.skyeye.repository.ImageRepository;
import com.ssafy.skyeye.service.CrackService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class CrackServiceImpl implements CrackService {
    private final CrackRepository crackRepository;

    private final FolderRepository folderRepository;

    private final ImageRepository imageRepository;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registCrack(CrackRegistDto crackRegistDto) {
        // TODO: JWT 본인인증 만약 아닐 시 405 Not Allowed


        Image image = getImageById(crackRegistDto.getImageId());
        Folder folder = getFolderById(crackRegistDto.getFolderId());

//        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
//        if(!jwtId.equals(folder.getUserId().getUserId()) && !jwtId.equals("admin")) {
//            throw new ForbiddenException("본인 아이디가 아닙니다.");
//        }

        Crack crack = Crack.builder()
                .crackType(crackRegistDto.getCrackType())
                .crackPosition(crackRegistDto.getCrackPosition())
                .imageId(image)
                .folderId(folder)
                .build();

        crackRepository.save(crack);
    }

    @Override
    public CrackDto getCrack(Long crackId) {
        Crack crack = getCrackById(crackId);

//        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
//        if(!jwtId.equals(crack.getBuildingId().getUserId().getUserId())&& !jwtId.equals("admin")) {
//            throw new ForbiddenException("본인 아이디가 아닙니다.");
//        }

        return CrackDto.entityToDto(crack);
    }

    @Override
    @Transactional
    public void updateCrack(CrackUpdateDto crackUpdateDto) {
        Crack crack = getCrackById(crackUpdateDto.getCrackId());

//        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
//        if(!jwtId.equals(crack.getBuildingId().getUserId().getUserId())&& !jwtId.equals("admin")) {
//            throw new ForbiddenException("본인 아이디가 아닙니다.");
//        }

        crack.setCrackPosition(crackUpdateDto.getCrackPosition());
        crack.setCrackType(crackUpdateDto.getCrackType());
    }

    @Override
    public void deleteCrack(Long crackId) {
//        String jwtId = SecurityContextHolder.getContext().getAuthentication().getName();
//        if(!jwtId.equals(getCrackById(crackId).getBuildingId().getUserId().getUserId())&& !jwtId.equals("admin")) {
//            throw new ForbiddenException("본인 아이디가 아닙니다.");
//        }
        crackRepository.delete(getCrackById(crackId));
    }

    ////////////////////////////////////////////////////////////////////////////////////////////
    public Image getImageById(Long imageId){
        if(imageId == null) return null;
        return imageRepository.findById(imageId)
                .orElse(null);
    }

    public Crack getCrackById(Long crackId){
        return crackRepository.findById(crackId)
                .orElseThrow(() -> new ForbiddenException("아이디가 없습니다."));

    }

    public Folder getFolderById(Long folderId){
        return folderRepository.findById(folderId)
                .orElseThrow(() -> new ForbiddenException("아이디가 없습니다."));
    }

}
