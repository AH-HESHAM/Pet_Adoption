package com.petadoption.mypet.Service;

import com.petadoption.mypet.DTO.PetDTO;
import com.petadoption.mypet.Model.Entity.Pet;
import com.petadoption.mypet.Model.Entity.Staff;
import com.petadoption.mypet.Model.Repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetService {
    @Autowired
    private PetRepository petRepository;

    public List<PetDTO> getAllPets() {
        return petRepository.getAllPets();
    }
    public List<PetDTO> getAllPetsForManager(int managerId) {
        return petRepository.getAllPetsForManager(managerId);
    }
    public List<PetDTO> getAllPetsForStaff(int staffId) {
        return petRepository.getAllPetsForStaff(staffId);
    }
}
