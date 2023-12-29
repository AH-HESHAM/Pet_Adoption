package com.petadoption.mypet.Model.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import com.petadoption.mypet.Enum.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.RowMapper;

import com.petadoption.mypet.Model.Entity.User;

import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;

@Repository
public class UserRepository {
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Optional<User> findByEmail(String email) {
        String sql = "SELECT * FROM user WHERE email = " + "\"" + email + "\"";
        List<User> users = jdbcTemplate.query(sql, (res, rowNum) -> {
            User user = new User();
            user.setId(res.getInt("user_id"));
            user.setFirstName(res.getString("first_name"));
            user.setLastName(res.getString("last_name"));
            user.setEmail(res.getString("email"));
            user.setPassword(res.getString("password"));
            user.setPhone(res.getString("phone"));
            user.setAddress(res.getString("address"));
            user.setCity(res.getString("city"));
            user.setValid(res.getBoolean("is_valid"));
            user.setRole(Role.valueOf(res.getString("role")));
            return user;
        });
        return Optional.ofNullable(users.get(0));
    }

    public boolean existsByEmail(String email) {
        String sql = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?)";
        return Boolean.TRUE.equals(jdbcTemplate.queryForObject(sql, Boolean.class, email));
    }

    // public void save(User user) {
    // String sql = "INSERT INTO user (first_name, last_name, email, password,
    // phone, address, city, role) " +
    // "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    // jdbcTemplate.update(sql, user.getFirstName(), user.getLastName(),
    // user.getEmail(), user.getPassword(), user.getPhone(),
    // user.getAddress(), user.getCity(), user.getRole().name());
    // }
    public int save(User user) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        String sql = "INSERT INTO user (first_name, last_name, email, password, phone, address, city, role) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection
                    .prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, user.getFirstName());
            ps.setString(2, user.getLastName());
            ps.setString(3, user.getEmail());
            ps.setString(4, user.getPassword());
            ps.setString(5, user.getPhone());
            ps.setString(6, user.getAddress());
            ps.setString(7, user.getCity());
            ps.setString(8, user.getRole().name());
            return ps;
        }, keyHolder);

        return Objects.requireNonNull(keyHolder.getKey()).intValue();
    }

}
