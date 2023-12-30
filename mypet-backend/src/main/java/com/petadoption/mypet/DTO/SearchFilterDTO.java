// SearchFilterDTO.java
package com.petadoption.mypet.DTO;

import lombok.*;

@Setter
@Getter
public class SearchFilterDTO {

    private String selectedFilter;
    private String searchQuery;


    // @Override
    // public String toString() {
    //     return "SearchFilterDTO{" +
    //             "selectedFilter='" + selectedFilter + '\'' +
    //             ", searchQuery='" + searchQuery + '\'' +
    //             '}';
    // }
}
