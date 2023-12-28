package com.petadoption.mypet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MypetApplication {

	public static void main(String[] args) {
		SpringApplication.run(MypetApplication.class, args);
		String s1 = "hello";
		String s2 = "word";
		String s3 = "helloword";
		System.out.println(s1 + s2 == s3); 
		System.out.println("hoiiiiiiiiiiiiiiii");
	}

}
