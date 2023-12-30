package com.petadoption.mypet.Utility;
import org.springframework.jdbc.core.RowMapper;

import com.petadoption.mypet.DTO.PetDTO;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class PetRowMapper implements RowMapper<PetDTO> {

    @Override
    public PetDTO mapRow(ResultSet resultSet, int rowNum) throws SQLException {
        PetDTO petDTO = new PetDTO();
        petDTO.setId(resultSet.getLong("id"));
        petDTO.setName(resultSet.getString("name"));
        petDTO.setSpecies(resultSet.getString("species"));
        petDTO.setBreed(resultSet.getString("breed"));
        petDTO.setAge(resultSet.getInt("age"));
        petDTO.setGender(resultSet.getString("gender"));
        petDTO.setHealthStatus(resultSet.getString("health_status"));
        petDTO.setBehavior(resultSet.getString("behavior"));
        petDTO.setDescription(resultSet.getString("description"));

        // Assuming 'images' and 'vaccinations' are stored as comma-separated strings in the database
        String imagesString = resultSet.getString("images");
        if (imagesString != null) {
            petDTO.setImages(List.of(imagesString.split("\\s*,\\s*")));
        }

        String vaccinationsString = resultSet.getString("vaccinations");
        if (vaccinationsString != null) {
            petDTO.setVaccinations(List.of(vaccinationsString.split("\\s*,\\s*")));
        }

        return petDTO;
    }
}