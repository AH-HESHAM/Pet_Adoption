package com.petadoption.mypet.Controller;


import com.petadoption.mypet.DTO.ManagerPostDTO;
import com.petadoption.mypet.DTO.PetDTO;
import com.petadoption.mypet.Service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@PreAuthorize("hasRole('STAFF_PUBLISHER')")
@RequestMapping("/publisherStaff")
public class PublisherStaff {
    @Autowired
    private PetService petService;
    @PostMapping("/pets")
    List<PetDTO> getPets(@RequestBody ManagerPostDTO staffId) {
        try {
            return petService.getAllPetsForStaff(staffId.getManagerId());
        } catch (Exception e) {
            return List.of();
        }
        
    }
}
