package com.petadoption.mypet.Model.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "staff")
public class Staff extends User {
    private String staffRole;
}
