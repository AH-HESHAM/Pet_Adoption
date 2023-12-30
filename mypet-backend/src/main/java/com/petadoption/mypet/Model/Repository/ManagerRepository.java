package com.petadoption.mypet.Model.Repository;

import com.petadoption.mypet.Model.Entity.Manager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ManagerRepository{
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void save(int userId) {
        String sql = "INSERT INTO manager (user_id) VALUES (?)";
        jdbcTemplate.update(sql, userId);
    }
}
