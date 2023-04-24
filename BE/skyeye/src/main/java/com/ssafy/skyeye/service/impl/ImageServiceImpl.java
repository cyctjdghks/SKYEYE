package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.entity.Image;
import com.ssafy.skyeye.repository.ImageRepository;
import com.ssafy.skyeye.service.ImageService;
import com.ssafy.skyeye.structure.file.FileHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {
    private final ImageRepository imageRepository;
    private final FileHandler fileHandler;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public long addImage(Image image, MultipartFile profile) {
        Image newImage = fileHandler.parseFileInfo(image.getImageId(), profile);

        imageRepository.save(newImage);

        return newImage.getImageId();
    }

}
