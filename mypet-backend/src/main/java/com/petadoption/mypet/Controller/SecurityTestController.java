package com.petadoption.mypet.Controller;


import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/security")
public class SecurityTestController {
    @PreAuthorize("hasRole('ADOPTER')")
    @GetMapping("/test")
    public String test() {
        return "test security";
    }
}
