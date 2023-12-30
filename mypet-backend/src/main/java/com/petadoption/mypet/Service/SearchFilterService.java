package com.petadoption.mypet.Service;


import com.petadoption.mypet.DTO.PetDTO;
import com.petadoption.mypet.DTO.PetSearchResultDTO;
import com.petadoption.mypet.Model.Repository.PetRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SearchFilterService {

    @Autowired
    private PetRepository petRepository;

    public List<PetDTO> searchPets(String filterType, String searchQuery) {
        List<PetDTO> result;
        
        if ("species".equals(filterType)) {
            result = petRepository.searchPetsBySpecies(searchQuery);
        } else if ("breed".equals(filterType)) {
            result = petRepository.searchPetsByBreed(searchQuery);
        } else if ("age".equals(filterType)) {
            result = petRepository.searchPetsByAge(searchQuery);
        } else if ("shelter".equals(filterType)) {
            result = petRepository.searchPetsByLocation(searchQuery);
        } else {
            result = petRepository.searchPetsAll(searchQuery);
        }
        return result;
    }
    
}
