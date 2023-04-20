package com.ssafy.skyeye.service;

import com.ssafy.skyeye.data.dto.request.CrackRegistDto;
import com.ssafy.skyeye.data.dto.request.CrackUpdateDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;
import org.springframework.web.multipart.MultipartFile;

public interface CrackService {
    void registCrack(MultipartFile multipartFile, CrackRegistDto crackRegistDto);
    CrackDto getCrack(String crackId);
    void updateCrack(CrackUpdateDto crackUpdateDto);
    void deleteCrack(String crackId);
}
