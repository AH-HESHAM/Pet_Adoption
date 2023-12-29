package com.petadoption.mypet.Service;

import com.petadoption.mypet.DTO.LogInRequestDTO;
import com.petadoption.mypet.DTO.LogInResponseDTO;
import com.petadoption.mypet.DTO.SignUpDTO;
import com.petadoption.mypet.Enum.Role;
import com.petadoption.mypet.Model.Entity.Shelter;
import com.petadoption.mypet.Model.Entity.User;
import com.petadoption.mypet.Model.Repository.*;
import com.petadoption.mypet.Security.JwtService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationService {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AdopterRepository adopterRepository;
    @Autowired
    private StaffRepository staffRepository;
    @Autowired
    private ManagerRepository managerRepository;
    @Autowired
    private ShelterRepository shelterRepository;
    public String registerUser(SignUpDTO signUpDTO) {
        if (userRepository.existsByEmail(signUpDTO.getEmail()))
            return "User already exists";
        if (signUpDTO.getRole().toString().equalsIgnoreCase("ROLE_ADOPTER"))
            addAdopter(signUpDTO);
        else if (signUpDTO.getRole().toString().equalsIgnoreCase("ROLE_MANAGER"))
            addManager(signUpDTO);
        else if (signUpDTO.getRole().toString().contains("STAFF"))
            addStaff(signUpDTO);
        else
            return "Invalid role";

        return "User registered successfully";
    }

    private void addAdopter(SignUpDTO signUpDTO) {
        User user = buildUser(signUpDTO);
        int userId = userRepository.save(user);
        adopterRepository.save(userId);
    }

    private void addStaff(SignUpDTO signUpDTO) {
        User user = buildUser(signUpDTO);
        int userId = userRepository.save(user);
        staffRepository.save(userId, signUpDTO.getManagerId(), signUpDTO.getShelterId(),
                signUpDTO.getRole().toString());
    }

    private void addManager(SignUpDTO signUpDTO) {
        // Create manager
        User user = buildUser(signUpDTO);
        int userId = userRepository.save(user);
        managerRepository.save(userId);
        // Create shelter
        Shelter shelter = new Shelter().setManagerId(userId)
                .setName(signUpDTO.getWorksFor())
                .setLocation(signUpDTO.getShelterAddress()).
                setContactInfo(signUpDTO.getShelterPhone());
        shelterRepository.save(shelter);
    }

    private User buildUser(SignUpDTO signUpDTO) {
        return new User().setFirstName(signUpDTO.getFirstName())
                .setLastName(signUpDTO.getLastName())
                .setEmail(signUpDTO.getEmail())
                .setPassword(passwordEncoder.encode(signUpDTO.getPassword()))
                .setPhone(signUpDTO.getPhone()).setRole(Role.ROLE_ADOPTER);
    }


    public LogInResponseDTO signIn(LogInRequestDTO login, @NonNull HttpServletResponse response) throws RuntimeException {
        System.out.println("logged in " + login.getEmail() + " " + login.getPassword());
        var authenticationResponse = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(login.getEmail(), login.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authenticationResponse); //throws unchecked exception
        String jwtToken = jwtService.generateToken((UserDetails) authenticationResponse.getPrincipal());
        createHttpOnlyCookie(response, jwtToken);
        return generateResponse(login, jwtToken);
    }

    private void createHttpOnlyCookie(@NonNull HttpServletResponse response, String jwtToken) {
        Cookie cookie = new Cookie("Authorization", jwtToken); // bearer
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        response.addCookie(cookie);
    }

    private LogInResponseDTO generateResponse(LogInRequestDTO login, String jwtToken) {
        User user = userRepository.findByEmail(login.getEmail()).orElseThrow(() -> new RuntimeException("User not found"));
        return new LogInResponseDTO().setId(user.getId()).setEmail(user.getEmail())
                .setName(user.getFirstName() + " " + user.getLastName())
                .setJwtToken(jwtToken)
                .setPrivilege(user.getRole().toString().substring(5));
    }

    public List<Shelter> getShelters() {
        return shelterRepository.getShelters();
    }
}
