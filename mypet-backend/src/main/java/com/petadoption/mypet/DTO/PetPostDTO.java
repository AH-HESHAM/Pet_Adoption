package com.petadoption.mypet.DTO;

import com.petadoption.mypet.Model.Entity.Pet;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
public class PetPostDTO {
    private int publisherId;
    private String name;
    private Pet.Species species;
    private Pet.Breed breed;
    private int age;
    private Pet.Gender gender;
    private String healthStatus;
    private String behavior;
    private String description;
    private boolean vaccinations;
}
