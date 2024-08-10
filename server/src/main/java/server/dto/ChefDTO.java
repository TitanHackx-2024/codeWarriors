package server.dto;

import lombok.Getter;
import server.entity.Chef;
import server.entity.Role;
import server.entity.User;

public record ChefDTO(String name, String skills, String availability, String phoneNumber, double rating) {

    public static Chef from(ChefDTO chefDTO) {
        Chef chef = new Chef();
        chef.setName(chefDTO.name);
        chef.setSkills(chefDTO.skills);
        chef.setAvailability(chefDTO.availability);
        chef.setPhoneNumber(chefDTO.phoneNumber);
        chef.setRating(chefDTO.rating);

        return chef;
    }
}