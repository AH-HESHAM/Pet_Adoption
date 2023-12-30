package com.petadoption.mypet.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petadoption.mypet.DTO.PetDTO;
import com.petadoption.mypet.Model.Repository.PetRepository;

import java.util.List;

@Service
public class FilterService {

    @Autowired
    private PetRepository petRepository;

    public List<PetDTO> filteredPets(
           boolean vaccinationFilter) {

        List<PetDTO> filteredPets = petRepository.applyFilters(vaccinationFilter);
        return filteredPets;
    }

    public List<PetDTO> getAll(){
        return petRepository.searchPetsAll("");
    }
}
