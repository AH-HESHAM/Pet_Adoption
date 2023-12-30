package com.petadoption.mypet.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;
import com.petadoption.mypet.Service.FilterService;

import com.petadoption.mypet.DTO.FilterDTO;
import com.petadoption.mypet.DTO.PetDTO;

import java.util.List;

@RestController
@RequestMapping("/filter")
public class FilterController {

    @Autowired
    private FilterService filterService;

    @PostMapping("/apply")
    public List<PetDTO> applyFilters(@RequestBody FilterDTO filterRequest) {

        boolean vaccinationFilter = filterRequest.getVaccinationFilter();

        List<PetDTO> filteredPets = filterService.filteredPets(vaccinationFilter);
        return filteredPets;
    }
}