package server.dto;


import server.entity.Chef;

import java.util.Optional;
import java.util.UUID;

public record ChefResponseDTO(UUID id, String name, String skills, String availability, String phoneNumber, double rating) {

    public static ChefResponseDTO fromChef(Chef chef) {
        ChefResponseDTO chefResponseDTO = new ChefResponseDTO(
                chef.getId(),
                chef.getName(),
                chef.getSkills(),
                chef.getAvailability(),
                chef.getPhoneNumber(),
                chef.getRating());
        return chefResponseDTO;
    }
}