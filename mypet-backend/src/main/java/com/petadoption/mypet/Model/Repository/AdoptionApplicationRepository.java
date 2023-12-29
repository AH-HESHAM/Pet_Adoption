package com.petadoption.mypet.Model.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.petadoption.mypet.Model.Entity.AdoptionApplication;

@Repository
public interface AdoptionApplicationRepository extends JpaRepository<AdoptionApplication, Integer> {
}
