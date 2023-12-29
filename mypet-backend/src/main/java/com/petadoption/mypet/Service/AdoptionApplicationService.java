package com.petadoption.mypet.Service;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;

import com.petadoption.mypet.Model.Entity.AdoptionApplication;
import com.petadoption.mypet.Model.Repository.AdoptionApplicationRepository;

@Service
public class AdoptionApplicationService {

    private final AdoptionApplicationRepository adoptionApplicationRepository;

    @Autowired
    public AdoptionApplicationService(AdoptionApplicationRepository adoptionApplicationRepository) {
        this.adoptionApplicationRepository = adoptionApplicationRepository;
    }

    public void processAdoptionApplication(AdoptionApplication adoptionApplication) {
        adoptionApplicationRepository.save(adoptionApplication);
    }

    public List<AdoptionApplication> getAllApplications() {
        return adoptionApplicationRepository.findAll();
    }
}
