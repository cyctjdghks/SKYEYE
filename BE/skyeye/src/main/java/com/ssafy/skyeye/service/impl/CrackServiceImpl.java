package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.CrackRegistDto;
import com.ssafy.skyeye.data.dto.request.CrackUpdateDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;
import com.ssafy.skyeye.repository.CrackRepository;
import com.ssafy.skyeye.service.CrackService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class CrackServiceImpl implements CrackService {
    private final CrackRepository crackRepository;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registCrack(MultipartFile multipartFile, CrackRegistDto crackRegistDto) {

    }

    @Override
    public CrackDto getCrack(String crackId) {
        return null;
    }

    @Override
    public void updateCrack(CrackUpdateDto crackUpdateDto) {

    }

    @Override
    public void deleteCrack(String crackId) {

    }
}
