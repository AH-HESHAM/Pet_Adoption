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

    @Enumerated(EnumType.STRING)  
    private ApplicationStatus applicationStatus;

    public enum ApplicationStatus {
        PENDING, APPROVED, REJECTED
    }

    public AdoptionApplication() {
    }

    // Constructor without id
    public AdoptionApplication(String adopterName, String contactInformation, ApplicationStatus applicationStatus) {
        this.adopterName = adopterName;
        this.contactInformation = contactInformation;
        this.applicationStatus = applicationStatus;
    }

    // Constructor with id
    public AdoptionApplication(Integer id, String adopterName, String contactInformation, ApplicationStatus applicationStatus) {
        this.id = id;
        this.adopterName = adopterName;
        this.contactInformation = contactInformation;
        this.applicationStatus = applicationStatus;
    }
}
