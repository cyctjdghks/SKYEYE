package com.ssafy.skyeye.structure.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    // TODO: SecurityConfig로 cors 구현
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**").allowedOrigins("*")
//                .allowedMethods(HttpMethod.GET.name(), HttpMethod.POST.name(), HttpMethod.PUT.name(),
//                        HttpMethod.DELETE.name(), HttpMethod.HEAD.name(), HttpMethod.OPTIONS.name(),
//                        HttpMethod.PATCH.name())
//                .allowedHeaders("*")
//                .maxAge(1800);
//
//    }


    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 배포환경 Docker Container에서 사진 저장 경로
        registry.addResourceHandler("/**").addResourceLocations("file:///usr/app/");
        // 로컬 환경(재현기준)에서 사진 저장 경로
//        registry.addResourceHandler("/**").addResourceLocations("file:///C:/ssafy/workspace/S08P31D202/BE/skyeye");
    }

}