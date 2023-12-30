package com.petadoption.mypet.DTO;

import com.petadoption.mypet.Model.Entity.AdoptionApplication;

import lombok.*;
import lombok.experimental.Accessors;

@Getter
@Setter
@Data
@Accessors(chain = true)
public class AdoptionApplicationDTO {

    private Integer petId;
    private Integer adopterId;
    private String adopterName;
    private String contactInformation;
    private String applicationStatus;

    // Constructors, getters, and setters

    public AdoptionApplicationDTO() {
    }

    public AdoptionApplicationDTO(int petId, int adopterId, String adopterName, String contactInformation, String applicationStatus) {
        this.petId = petId;
        this.adopterId = adopterId;
        this.adopterName = adopterName;
        this.contactInformation = contactInformation;
        this.applicationStatus = applicationStatus;
    }
}
