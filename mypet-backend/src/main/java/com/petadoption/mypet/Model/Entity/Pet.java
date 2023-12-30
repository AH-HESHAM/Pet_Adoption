package com.petadoption.mypet.Model.Entity;

import java.util.*;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "pets")
public class Pet {

    public enum Gender {
        MALE, FEMALE
    }

    public enum Species {
        DOG, CAT
    }

    public enum Breed {
        LABRADOR, PERSIAN, MIXED
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @Enumerated(EnumType.STRING)
    private Species species;

    @Enumerated(EnumType.STRING)
    private Breed breed;

    private int age;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private String healthStatus;
    private String behavior;
    private String description;

    @Lob
    private List<String> images;

    private boolean vaccinations;

    public Pet() {
    }

}
