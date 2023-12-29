package com.petadoption.mypet.DTO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.petadoption.mypet.Enum.Role;
import lombok.Data;

@Data
public class SignUpDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phone;
    private Role role;
    private String worksFor; // for manager and staff
    //for managers
    private String shelterAddress;
    private String shelterPhone;
    //for staff
    private int managerId;
    private int shelterId;
}
