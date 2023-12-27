package com.petadoption.mypet.Model.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "manager")
public class Manager extends User {
}
