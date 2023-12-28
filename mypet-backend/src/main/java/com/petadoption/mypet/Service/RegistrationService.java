package com.petadoption.mypet.Service;

import com.petadoption.mypet.DTO.LogInRequestDTO;
import com.petadoption.mypet.DTO.LogInResponseDTO;
import com.petadoption.mypet.DTO.SignUpDTO;
import com.petadoption.mypet.Enum.Role;
import com.petadoption.mypet.Model.Entity.User;
import com.petadoption.mypet.Model.Repository.UserRepository;
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

@Service
public class RegistrationService {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;

    public String registerUser(SignUpDTO signUpDTO) {
//        if(userRepository.existsByEmail(signUpDTO.getEmail())) {
//            throw new RuntimeException("User already exists");
//        }
        User user = new User().setFirstName(signUpDTO.getFirstName())
                .setLastName(signUpDTO.getLastName())
                .setEmail(signUpDTO.getEmail())
                .setPassword(passwordEncoder.encode(signUpDTO.getPassword()))
                .setPhone(signUpDTO.getPhone()).setAddress(signUpDTO.getAddress())
                .setCity(signUpDTO.getCity()).setRole(Role.ROLE_ADOPTER);
        userRepository.save(user);
        return "User registered successfully";
    }
    public LogInResponseDTO signIn(LogInRequestDTO login, @NonNull HttpServletResponse response) throws RuntimeException{
        System.out.println("logged in " + login.getEmail() + " " + login.getPassword());
        var authenticationResponse = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(login.getEmail(), login.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authenticationResponse); //throws unchecked exception
        String jwtToken = jwtService.generateToken((UserDetails) authenticationResponse.getPrincipal());
        createHttpOnlyCookie(response, jwtToken);
        return generateResponse(login, jwtToken);
    }
    private void createHttpOnlyCookie(@NonNull HttpServletResponse response, String jwtToken){
        Cookie cookie = new Cookie("Authorization", jwtToken); // bearer
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        response.addCookie(cookie);
    }
    private LogInResponseDTO generateResponse(LogInRequestDTO login, String jwtToken) {
        User user = userRepository.findByEmail(login.getEmail()).orElseThrow(() -> new RuntimeException("User not found"));
        return new LogInResponseDTO().setId(user.getId()).setEmail(user.getEmail())
                .setName(user.getFirstName() + " " + user.getLastName())
                .setJwtToken(jwtToken);
    }


//    public String signIn(String email, String password) {
//        try {
//            var authentication = authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(email, password)
//            );
//            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//            return jwtService.generateToken(userDetails);
//        } catch (RuntimeException e) {
//            System.out.println(e.getMessage());
//            return "Login failed";
//        }
//    }

}
