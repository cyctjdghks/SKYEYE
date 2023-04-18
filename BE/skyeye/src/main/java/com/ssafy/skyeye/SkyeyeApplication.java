package com.ssafy.skyeye;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SkyeyeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkyeyeApplication.class, args);
	}

}
