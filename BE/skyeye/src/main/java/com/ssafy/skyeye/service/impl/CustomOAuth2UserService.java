package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.entity.Image;
import com.ssafy.skyeye.data.entity.User;
import com.ssafy.skyeye.data.exception.ForbiddenException;
import com.ssafy.skyeye.repository.ImageRepository;
import com.ssafy.skyeye.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Service
@Slf4j
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final ImageRepository imageRepository;
    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest){
        log.info("{} 메서드 호출 ", Thread.currentThread().getStackTrace()[1].getMethodName());
        OAuth2User oAuth2User = super.loadUser(userRequest);

        String provider = userRequest.getClientRegistration().getRegistrationId();
        System.out.println(provider);

        Map<String, Object> map = new HashMap<>();

        if(provider.equals("google")) {

            String src = String.valueOf(oAuth2User.getAttributes().get("picture"));
            String name = String.valueOf(oAuth2User.getAttributes().get("name"));
            String email = String.valueOf(oAuth2User.getAttributes().get("email"));

            registUser(email, src, name, provider);

        }else if(provider.equals("kakao")){
            map = (Map<String, Object>)oAuth2User.getAttributes().get("kakao_account");

            if(!(Boolean)map.get("has_email")) {
                throw new ForbiddenException("이메일 동의를 해주세요");
            }

            String email = String.valueOf(map.get("email"));

            map = (Map<String, Object>)map.get("profile");

            String src = String.valueOf(map.get("profile_image_url"));
            String name = String.valueOf(map.get("nickname"));

            registUser(email, src, name, provider);
            map = (Map<String, Object>)oAuth2User.getAttributes().get("kakao_account");
        }

        return new DefaultOAuth2User(
                Collections.singleton(new SimpleGrantedAuthority("ROLE_SOCIAL_USER")),
                oAuth2User.getAttributes(),
                provider.equals("google") ? "email" : String.valueOf(map.get("email")));

    }


    public void registUser(String email, String src, String name, String provider){
        
        log.info("{}, {}, {}, {} ", email, src, name, provider);

        if(userRepository.existsById(email)) {
            User temp = userRepository.findById(email)
                    .orElseThrow(() -> new ForbiddenException("아이디가 없습니다."));

            System.out.println(temp.getUserId() + " " + temp.getImageId().getImageId());

            Image image = null;
            if(temp.getImageId() != null) {
                image = imageRepository.findById(temp.getImageId().getImageId())
                        .orElse(null);
                if (!(src.isEmpty() || src.equals(""))) {
                    image.setStoredFileName(src);

                    imageRepository.save(image);
                }
            }else {

                if (!(src.isEmpty() || src.equals(""))) {
                    image = Image.builder()
                            .storedFileName(src)
                            .build();

                    imageRepository.save(image);
                }
            }

        }
        else {
            Image image = null;
            if (!(src.isEmpty() || src.equals(""))) {
                image = Image.builder()
                        .storedFileName(src)
                        .build();

                imageRepository.save(image);
            }

            User user = User.builder()
                    .userId(email)
                    .userName(name)
                    .imageId(image == null ? null : image)
                    .userPosition(provider)
                    .build();

            userRepository.save(user);
        }
    }
}
