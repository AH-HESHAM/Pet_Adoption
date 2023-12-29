package com.petadoption.mypet.Model.Repository;

import com.petadoption.mypet.Enum.Role;
import com.petadoption.mypet.Model.Entity.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository

public class StaffRepository {
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void save(int userId, int managerId, int shelterId, String role) {
        String sql = "INSERT INTO staff (user_id, manager_id, shelter_id, staff_role) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, userId, managerId, shelterId, role);
    }

}

