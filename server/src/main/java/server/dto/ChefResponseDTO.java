package server.dto;


import server.entity.Chef;

import java.util.Optional;

public record ChefResponseDTO(String name, String skills, String availability, String phoneNumber, double rating) {

    public static ChefResponseDTO fromChef(Chef chef) {
        ChefResponseDTO chefResponseDTO = new ChefResponseDTO(
                chef.getName(),
                chef.getSkills(),
                chef.getAvailability(),
                chef.getPhoneNumber(),
                chef.getRating());
        return chefResponseDTO;
    }
}