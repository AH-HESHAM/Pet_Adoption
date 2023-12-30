package com.petadoption.mypet.DTO;

import com.petadoption.mypet.Model.Entity.Pet;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PetSearchResultDTO {

    private Long id;
    private String name;
    private String species;
    private String breed;
    private int age;
    private String gender;
    private String healthStatus;
    private String behavior;
    private String description;

    public PetSearchResultDTO(Long id, String name, String species, String breed, int age, String gender,
            String healthStatus, String behavior, String description) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.breed = breed;
        this.age = age;
        this.gender = gender;
        this.healthStatus = healthStatus;
        this.behavior = behavior;
        this.description = description;
    }

}
