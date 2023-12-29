package com.petadoption.mypet.Model.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Data
public class AdoptionApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String adopterName;
    private String contactInformation;
    private ApplicationStatus applicationStatus;

    public enum ApplicationStatus {
        PENDING, APPROVED, REJECTED
    }

    public AdoptionApplication() {
    }

    public AdoptionApplication(String adopterName2, String contactInformation2, ApplicationStatus applicationStatus2) {
        this.adopterName = adopterName2;
        this.contactInformation = contactInformation2;
        this.applicationStatus = applicationStatus2;
    }
}