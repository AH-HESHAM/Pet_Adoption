package com.petadoption.mypet.Model.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import com.petadoption.mypet.DTO.PetDTO;
import com.petadoption.mypet.Model.Entity.Pet;
import com.petadoption.mypet.Utility.PetRowMapper;

import java.sql.PreparedStatement;
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

    public List<PetDTO> applyFilters(boolean vaccinationFilter) {
        String sql = "SELECT * FROM pets WHERE 1=1";

        if (vaccinationFilter) { // Assuming vaccinationFilter is already a boolean
            sql += " AND vaccinations = TRUE";
        } else {
            sql += " AND vaccinations = FALSE";
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
// public List<PetDTO> searchPets(String filterType, String searchQuery) {
// String sql = "SELECT p.* FROM pets p " +
// "LEFT JOIN shelters s ON (:filterType = 'location' AND p.shelter_id =
// s.shelter_id) " +
// "WHERE " +
// "(CASE " +
// " WHEN :filterType = 'species' THEN LOWER(p.species) LIKE LOWER(CONCAT('%',
// :searchQuery, '%')) " +
// " WHEN :filterType = 'breed' THEN LOWER(p.breed) LIKE LOWER(CONCAT('%',
// :searchQuery, '%')) " +
// " WHEN :filterType = 'age' THEN CAST(p.age AS CHAR) LIKE CONCAT('%',
// :searchQuery, '%') " +
// " WHEN :filterType = 'location' THEN s.location IN (SELECT location FROM
// shelters WHERE LOWER(location) LIKE LOWER(CONCAT('%', :searchQuery, '%'))) "
// +
// " ELSE TRUE " +
// "END)";

// MapSqlParameterSource params = new MapSqlParameterSource()
// .addValue("filterType", filterType)
// .addValue("searchQuery", searchQuery);

// return namedParameterJdbcTemplate.query(
// sql,
// params,
// (rs, rowNum) -> {
// PetDTO petDTO = new PetDTO();
// petDTO.setId(rs.getLong("id"));
// petDTO.setName(rs.getString("name"));
// petDTO.setSpecies(rs.getString("species"));
// petDTO.setBreed(rs.getString("breed"));
// petDTO.setAge(rs.getInt("age"));
// petDTO.setGender(rs.getString("gender"));
// petDTO.setHealthStatus(rs.getString("health_status"));
// petDTO.setBehavior(rs.getString("behavior"));
// petDTO.setDescription(rs.getString("description"));
// String imagesString = rs.getString("images");
// List<String> imagesList = new
// ArrayList<>(Arrays.asList(imagesString.split("\\s*,\\s*")));
// petDTO.setImages(imagesList);
// String vaccinationsString = rs.getString("vaccinations");
// List<String> vaccinationsList = new ArrayList<>(
// Arrays.asList(vaccinationsString.split("\\s*,\\s*")));
// petDTO.setVaccinations(vaccinationsList);
// return petDTO;
// });
