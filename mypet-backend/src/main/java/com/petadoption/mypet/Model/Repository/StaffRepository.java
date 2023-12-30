package com.petadoption.mypet.Model.Repository;

import com.petadoption.mypet.Enum.Role;
import com.petadoption.mypet.Model.Entity.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public class StaffRepository {
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void save(int userId, int managerId, int shelterId) {
        String sql = "INSERT INTO staff (user_id, manager_id, shelter_id) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, userId, managerId, shelterId);
    }
    public List<Staff> getStaffByManager(int managerId) {
        String sql = "SELECT * FROM staff JOIN user " +
                     "ON staff.user_id = user.user_id\n" +
                     "WHERE staff.manager_id = ?";
        return jdbcTemplate.query(sql, (rs, row) -> {
            Staff staff = new Staff();
            staff.setId(rs.getInt("user_id"));
            staff.setShelterId(rs.getInt("shelter_id"));
            staff.setRole(Role.valueOf(rs.getString("role")));
            staff.setEmail(rs.getString("email"));
            staff.setFirstName(rs.getString("first_name"));
            staff.setLastName(rs.getString("last_name"));
            staff.setPhone(rs.getString("phone"));
            return staff;
        }, managerId);
    }

}

