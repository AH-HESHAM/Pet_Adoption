package com.petadoption.mypet.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petadoption.mypet.DTO.PetDTO;
import com.petadoption.mypet.DTO.SearchFilterDTO;
import com.petadoption.mypet.Service.SearchFilterService;


@PreAuthorize("hasRole('ADOPTER')")
@RestController
@RequestMapping("/search")
public class SearchFilterController {

    private final SearchFilterService searchFilterService;

    @Autowired
    public SearchFilterController(SearchFilterService searchFilterService) {
        this.searchFilterService = searchFilterService;
    }

    @PostMapping("/apply")
    public List<PetDTO> applySearchFilter(@RequestBody SearchFilterDTO searchFilterDTO) {
        String selectedFilter = searchFilterDTO.getSelectedFilter();
        String searchQuery = searchFilterDTO.getSearchQuery();
        return searchFilterService.searchPets(selectedFilter, searchQuery);
    }
}