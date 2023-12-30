package com.petadoption.mypet.DTO;

import java.util.List;

import lombok.*;

@Setter
@Getter
public class FilterDTO {
    private Boolean vaccinationFilter;

    public FilterDTO(boolean vaccinationFilter) {
        this.vaccinationFilter = vaccinationFilter;
    }

    public FilterDTO() {
    }
}
