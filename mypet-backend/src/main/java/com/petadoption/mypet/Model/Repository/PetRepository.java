package com.petadoption.mypet.Model.Repository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.stereotype.Repository;
import com.petadoption.mypet.DTO.PetDTO;
import com.petadoption.mypet.Model.Entity.Pet;
import com.petadoption.mypet.Utility.PetRowMapper;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;


@Repository
public class PetRepository {

    private final JdbcTemplate jdbcTemplate;
    private UtilityRepository utilityRepository;

    @Autowired
    public PetRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Autowired
    public void setUtilityRepository(UtilityRepository utilityRepository) {
        this.utilityRepository = utilityRepository;
    }

    public List<PetDTO> searchPetsBySpecies(String searchQuery) {
        String sql = "SELECT * FROM pets WHERE LOWER(species) LIKE LOWER(CONCAT('%', ?, '%'))";
        return jdbcTemplate.query(sql, new PetRowMapper(), searchQuery);
    }

    public List<PetDTO> searchPetsByBreed(String searchQuery) {
        String sql = "SELECT * FROM pets WHERE LOWER(breed) LIKE LOWER(CONCAT('%', ?, '%'))";
        return jdbcTemplate.query(sql, new PetRowMapper(), searchQuery);
    }

    public List<PetDTO> searchPetsByAge(String searchQuery) {
        String sql = "SELECT * FROM pets WHERE CAST(age AS CHAR) LIKE CONCAT('%', ?, '%')";
        return jdbcTemplate.query(sql, new PetRowMapper(), searchQuery);
    }

    public List<PetDTO> searchPetsByLocation(String searchQuery) {
        String sql = "SELECT p.* FROM pets p " +
                "LEFT JOIN shelters s ON p.shelter_id = s.shelter_id " +
                "WHERE LOWER(s.location) LIKE LOWER(CONCAT('%', ?, '%'))";
        return jdbcTemplate.query(sql, new PetRowMapper(), searchQuery);
    }

    public List<PetDTO> searchPetsByName(String searchQuery) {
        String sql = "SELECT * FROM pets WHERE LOWER(name) LIKE LOWER(CONCAT('%', ?, '%'))";
        return jdbcTemplate.query(sql, new PetRowMapper(), searchQuery);
    }

    public List<PetDTO> searchPetsAll(String searchQuery) {
        return searchPetsByName(searchQuery);
    }


    public List<PetDTO> applyFilters(boolean houseTrainingFilter, List<String> vaccinationFilter, boolean spayingNeuteringFilter) {
        // Construct the SQL query based on the provided filters
        String sql = "SELECT * FROM pets WHERE 1=1";

        if (houseTrainingFilter) {
            sql += " AND house_trained = true";
        }

        if (!vaccinationFilter.isEmpty()) {
            sql += " AND vaccination IN ('" + String.join("', '", vaccinationFilter) + "')";
        }

        if (spayingNeuteringFilter) {
            sql += " AND spayed_neutered = true";
        }
        // Execute the query and return the result
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(PetDTO.class));
    }

    // used by adopter
    public List<PetDTO> getAllPets() {
        String sql = "SELECT * FROM pets";
        return jdbcTemplate.query(sql, new PetRowMapper());
    }

    //for the manager
    public List<PetDTO> getAllPetsForManager(int managerId) {
        int shelterId = utilityRepository.managerIdToShelterId(managerId);
        String sql = "SELECT * FROM pets WHERE shelter_id = ?";

        return jdbcTemplate.query(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql);
            ps.setInt(1, shelterId);
            return ps;
        }, new PetRowMapper());
    }
    //for the staff
    public List<PetDTO> getAllPetsForStaff(int staffId) {
        int shelterId = utilityRepository.staffIdToShelterId(staffId);
        String sql = "SELECT * FROM pets WHERE shelter_id = ?";
        return jdbcTemplate.query(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql);
            ps.setInt(1, shelterId);
            return ps;
        }, new PetRowMapper());
    }

}
