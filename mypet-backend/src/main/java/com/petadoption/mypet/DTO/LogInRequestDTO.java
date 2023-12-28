package com.petadoption.mypet.DTO;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class LogInRequestDTO {
    private String email;
    private String password;
}
