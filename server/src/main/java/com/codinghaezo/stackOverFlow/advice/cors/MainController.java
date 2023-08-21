package com.codinghaezo.stackOverFlow.advice.cors;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

//@CrossOrigin(origins={"http://localhost:3000",
//        "http://pre-project-deploy.s3-website.ap-northeast-2.amazonaws.com"}, allowedHeaders = "*")
//@Controller
//public class MainController {
//    @GetMapping(path = "/")
//    public String main(Model model) {
//        return "main";
//    }
//}