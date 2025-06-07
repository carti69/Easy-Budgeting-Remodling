package com.example.mavenproj.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
//annotation is crucial for allowing React app (port 3000) to communicate with 
//backend (port 8080)
@CrossOrigin(origins = "http://localhost:3000")
public class ApiController {
    
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from springboot backend";
    }
    
}
