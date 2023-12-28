package com.petadoption.mypet.Model.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "adopter")
public class Adopter extends User {
    @Column(name = "number_of_pets_adopted", columnDefinition = "int default 0")
    private int numberOfPetsAdopted;
}
