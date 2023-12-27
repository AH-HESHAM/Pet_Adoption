package com.petadoption.mypet.Model.Repository;

import com.petadoption.mypet.Model.Entity.User;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
     Optional<User> findByEmail(String email);
}
