package com.petadoption.mypet.Model.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UtilityRepository {
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    public int managerIdToShelterId(int managerId) {
        String sql = "SELECT shelter_id FROM shelters WHERE manager_id = ?";
        Integer shelterId = jdbcTemplate.queryForObject(sql, Integer.class, managerId);
        if(shelterId == null) throw new RuntimeException("manager to shelter id is in trouble");
        return shelterId;
    }
    public int staffIdToShelterId(int staffId) {
        String sql = "SELECT shelter_id FROM staff WHERE user_id = ?";
        Integer shelterId = jdbcTemplate.queryForObject(sql, Integer.class, staffId);
        if(shelterId == null) throw new RuntimeException("staff to shelter id is in trouble");
        return shelterId;
    }
}