package com.petadoption.mypet.Model.Entity;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Shelter {
    private int shelterId;
    private int managerId;
    private String name;
    private String location;
    private String contactInfo;
}
