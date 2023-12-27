package com.petadoption.mypet.Model.Repository;

import com.petadoption.mypet.Model.Entity.Adopter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface AdopterRepository extends JpaRepository<Adopter, Integer> {
}
