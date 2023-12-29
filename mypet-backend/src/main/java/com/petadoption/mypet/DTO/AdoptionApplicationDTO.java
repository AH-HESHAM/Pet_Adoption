package com.petadoption.mypet.DTO;

import com.petadoption.mypet.Model.Entity.AdoptionApplication;

import lombok.*;

@Getter
@Setter
public class AdoptionApplicationDTO {
    private String adopterName;
    private String contactInformation;
    private AdoptionApplication.ApplicationStatus applicationStatus;

    public AdoptionApplicationDTO(String adopterName, String contactInformation,
            AdoptionApplication.ApplicationStatus applicationStatus) {
        this.adopterName = adopterName;
        this.contactInformation = contactInformation;
        this.applicationStatus = applicationStatus;
    }
}
