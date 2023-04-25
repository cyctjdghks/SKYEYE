package com.ssafy.skyeye.service;

import com.ssafy.skyeye.data.dto.request.CrackRegistDto;
import com.ssafy.skyeye.data.dto.request.CrackUpdateDto;
import com.ssafy.skyeye.data.dto.response.CrackDto;
import org.springframework.web.multipart.MultipartFile;

public interface CrackService {
    void registCrack(CrackRegistDto crackRegistDto);
    CrackDto getCrack(Long crackId);
    void updateCrack(CrackUpdateDto crackUpdateDto);
    void deleteCrack(Long crackId);
}
