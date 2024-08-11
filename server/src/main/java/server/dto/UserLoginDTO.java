package server.dto;

import server.entity.User;

import java.util.Optional;

public record UserLoginDTO(String email, String password) {
    public static Optional<User> from(UserLoginDTO userLoginDTO) {
        User user = new User();
        user.setEmail(userLoginDTO.email);
        user.setPassword(userLoginDTO.password);
        return Optional.of(user);
    }
}
