package com.petadoption.mypet.Model.Repository;

import com.petadoption.mypet.Model.Entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface StaffRepository extends JpaRepository<Staff, Integer> {
}
