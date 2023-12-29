package com.petadoption.mypet.DTO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class LogInResponseDTO {
    private int id;
    private String name;
    private String email;
    private String privilege;
    @JsonIgnore
    private String jwtToken;
}
