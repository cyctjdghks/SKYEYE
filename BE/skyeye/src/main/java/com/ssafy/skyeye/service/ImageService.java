package com.ssafy.skyeye.service;


import com.ssafy.skyeye.data.entity.Image;
import org.springframework.web.multipart.MultipartFile;

public interface ImageService {

    long addImage(Image image, MultipartFile profile);
}
