package com.petadoption.mypet.Controller;

import com.petadoption.mypet.DTO.PetDTO;
import com.petadoption.mypet.Model.Entity.Pet;
import com.petadoption.mypet.Service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@PreAuthorize("hasRole('MANAGER')")
@RequestMapping("/manager")
public class ManagerController {
    @Autowired
    private PetService petService;

    @PostMapping("/pets")
    public List<PetDTO> getPets(int managerId) {
        return petService.getAllPetsForManager(managerId);
    }
}
