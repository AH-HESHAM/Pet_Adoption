package com.petadoption.mypet.Model.Repository;

import com.petadoption.mypet.DTO.PetPostDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PostRepository {
    private JdbcTemplate jdbcTemplate;
    private UtilityRepository utilityRepository;

    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Autowired
    public void setUtilityRepository(UtilityRepository utilityRepository) {
        this.utilityRepository = utilityRepository;
    }

    public void save(PetPostDTO post) {
        int shelterId = utilityRepository.staffIdToShelterId(post.getPublisherId());
        String sql = "INSERT INTO pets (age, behavior, breed, description, " +
                "gender, health_status,name, shelter_id, species, vaccinations) VALUES (?, ?, ?, ? , ?, ?, ?, ?, ?,?)  ";
        jdbcTemplate.update(sql, post.getAge(), post.getBehavior(), post.getBreed().toString(), post.getDescription(),
                post.getGender().toString(), post.getHealthStatus(), post.getName(),
                shelterId, post.getSpecies().toString(), post.isVaccinations());
    }
}
