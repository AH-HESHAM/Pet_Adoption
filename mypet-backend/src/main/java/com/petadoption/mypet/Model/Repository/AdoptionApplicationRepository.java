package com.petadoption.mypet.Model.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.petadoption.mypet.DTO.AdoptionApplicationDTO;
import com.petadoption.mypet.Model.Entity.AdoptionApplication;

import java.util.List;

@Repository
public class AdoptionApplicationRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public AdoptionApplicationRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
public void save(AdoptionApplicationDTO adoptionApplicationDTO) {
        String sql = "INSERT INTO adoption_application (adopter_id, pet_id, adopter_name, contact_information, application_status) " +
                "VALUES (?, ?, ?, ?, ?)";
        jdbcTemplate.update(
                sql,
                adoptionApplicationDTO.getAdopterId(),
                adoptionApplicationDTO.getPetId(),
                adoptionApplicationDTO.getAdopterName(),
                adoptionApplicationDTO.getContactInformation(),
                adoptionApplicationDTO.getApplicationStatus()
        );
    }

    public List<AdoptionApplicationDTO> getAllApplications() {
        String sql = "SELECT * FROM adoption_application";
        return jdbcTemplate.query(
                sql,
                (res, rowNum) -> new AdoptionApplicationDTO(
                        res.getInt("adopter_id"),
                        res.getInt("pet_id"),
                        res.getString("adopter_name"),
                        res.getString("contact_information"),
                        res.getString("application_status"))
                
        );
    }
}
