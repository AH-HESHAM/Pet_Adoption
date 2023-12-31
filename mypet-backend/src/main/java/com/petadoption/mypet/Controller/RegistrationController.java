package com.petadoption.mypet.Controller;

import com.petadoption.mypet.DTO.LogInRequestDTO;
import com.petadoption.mypet.DTO.LogInResponseDTO;
import com.petadoption.mypet.DTO.SignInDTO;
import com.petadoption.mypet.DTO.SignUpDTO;
import com.petadoption.mypet.Model.EmailDetails;
import com.petadoption.mypet.Model.Entity.User;
import com.petadoption.mypet.Model.Repository.UserRepository;
import com.petadoption.mypet.Service.IMailSender;
import com.petadoption.mypet.Service.Imp.EmailSender;
import com.petadoption.mypet.Service.RegistrationService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
public class RegistrationController {
    @Autowired
    private  EmailSender emailSender;
    @Autowired
    private  UserRepository userRepository;
    @Autowired
    private RegistrationService registrationService;


    @PostMapping("/forgetPassword")
    public ResponseEntity<String> forgetPassword() {
        EmailDetails emailDetails = new EmailDetails("alsayedm12@gmail.com", "zzzzzzzzz", "Hello World");
        emailSender.sendEmail(emailDetails);
        return new ResponseEntity<>("sent", HttpStatus.OK);
    }
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignUpDTO signUpDTO) {
        System.out.println("In sign up controller - Email : " + signUpDTO.getEmail());
        return new ResponseEntity<>(registrationService.registerUser(signUpDTO), HttpStatus.OK);
    }
    //TODO : Handle unchecked exception caused by auth manager
    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody LogInRequestDTO login,
                                    @NonNull HttpServletResponse response) {
        System.out.println("In LogIn controller - Email : " + login.getEmail()
                + " Password : " + login.getPassword());
        return new ResponseEntity<LogInResponseDTO>(registrationService.signIn(login, response),
                HttpStatus.OK);
    }
    @GetMapping("/shelters")
    public ResponseEntity<?> getShelters() {
        return new ResponseEntity<>(registrationService.getShelters(), HttpStatus.OK);
    }

    @GetMapping("/test")
    public String test() {
        return "test";
    }

}
