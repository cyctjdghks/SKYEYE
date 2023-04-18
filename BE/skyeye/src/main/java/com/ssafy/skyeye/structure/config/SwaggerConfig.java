package com.ssafy.skyeye.structure.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI openAPI(@Value("${spring-doc: version}") String springDocVersion) {
        Info info = new Info()
                .title("D202 Swagger")
                .version(springDocVersion)
                .description("D202 Swagger Description");

        return new OpenAPI()
                .components(new Components())
                .info(info);
    }
}
