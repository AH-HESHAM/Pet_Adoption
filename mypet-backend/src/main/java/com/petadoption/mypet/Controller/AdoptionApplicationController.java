package com.petadoption.mypet.Controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.petadoption.mypet.DTO.AdoptionApplicationDTO;
import com.petadoption.mypet.Model.Entity.AdoptionApplication;
import com.petadoption.mypet.Service.AdoptionApplicationService;

import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;

@RestController
@RequestMapping("/adoption")
public class AdoptionApplicationController {

    @Autowired
    private AdoptionApplicationService adoptionApplicationService;

    @PreAuthorize("hasRole('ADOPTER')")
    @PostMapping("/submit-application")
    public ResponseEntity<String> submitAdoptionApplication(@RequestBody AdoptionApplicationDTO adoptionApplicationDTO) {

        System.out.println(adoptionApplicationDTO);
        adoptionApplicationService.processAdoptionApplication(adoptionApplicationDTO);

        return ResponseEntity.ok("Adoption application submitted successfully");
    }

    private AdoptionApplication convertToEntity(AdoptionApplicationDTO adoptionApplicationDTO) {
        return new AdoptionApplication(
                adoptionApplicationDTO.getAdopterName(),
                adoptionApplicationDTO.getContactInformation(),
                AdoptionApplication.ApplicationStatus.valueOf(adoptionApplicationDTO.getApplicationStatus())
        );
    }

    // @GetMapping("/test")
    // public ResponseEntity<String> test() {
    //     return ResponseEntity.ok("Test");
    // }
}