package server.dto;

import server.entity.User;
import java.util.UUID;

public record UserResponseDTO(String name, String email, String roles, String phone, UUID id) {
    public static UserResponseDTO fromUser(User user) {

        String role = user.getRoles().toString();
        return new UserResponseDTO(
                user.getUsername(), user.getEmail(), role, user.getPhoneNumber(), user.getId());
    }
}
