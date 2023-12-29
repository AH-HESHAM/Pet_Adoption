package com.petadoption.mypet.Model.Repository;

import com.petadoption.mypet.Model.Entity.Shelter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ShelterRepository {
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    public void save(Shelter shelter) {
        String sql = "INSERT INTO shelters (manager_id, name, location, contact_information) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, shelter.getManagerId(), shelter.getName(),
                shelter.getLocation(), shelter.getContactInfo());
    }
    public List<Shelter> getShelters() {
        String sql = "SELECT * FROM shelters";
        return jdbcTemplate.query(sql, (rs, rowNum) -> new Shelter().setShelterId(rs.getInt("shelter_id"))
                .setManagerId(rs.getInt("manager_id"))
                .setName(rs.getString("name"))
                .setLocation(rs.getString("location"))
                .setContactInfo(rs.getString("contact_information")));

    }
}
