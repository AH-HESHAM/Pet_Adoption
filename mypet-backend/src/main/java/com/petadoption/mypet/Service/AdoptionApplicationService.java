package com.petadoption.mypet.Service;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;

import com.petadoption.mypet.DTO.AdoptionApplicationDTO;
import com.petadoption.mypet.Model.Entity.AdoptionApplication;
import com.petadoption.mypet.Model.Repository.AdoptionApplicationRepository;

@Service
public class AdoptionApplicationService {

    @Autowired
    private AdoptionApplicationRepository adoptionApplicationRepository;

    public void processAdoptionApplication(AdoptionApplicationDTO adoptionApplication) {
        System.out.println(adoptionApplication);
        adoptionApplicationRepository.save(adoptionApplication);
    }

    public List<AdoptionApplicationDTO> getAllApplications() {
        return adoptionApplicationRepository.getAllApplications();
    }
}
