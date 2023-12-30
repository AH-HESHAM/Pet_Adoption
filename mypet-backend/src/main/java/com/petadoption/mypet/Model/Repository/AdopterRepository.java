package com.petadoption.mypet.Model.Repository;

import com.petadoption.mypet.Model.Entity.Adopter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class AdopterRepository{
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    public void save(int userId) {
        String sql = "INSERT INTO adopter (user_id, number_of_pets_adopted) VALUES (?, ?)";
        jdbcTemplate.update(sql, userId, 0);
    }
}