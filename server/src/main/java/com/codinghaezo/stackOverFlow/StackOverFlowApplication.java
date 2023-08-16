package com.codinghaezo.stackOverFlow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
@EnableJpaAuditing
public class StackOverFlowApplication {

	public static void main(String[] args) {
		SpringApplication.run(StackOverFlowApplication.class, args);
	}
}
