package server.dto;

import server.entity.User;

import java.util.Optional;

public record UserLoginDTO(String username, String password) {
    public static Optional<User> from(UserLoginDTO userLoginDTO) {
        User user = new User();
        user.setUsername(userLoginDTO.username);
        user.setPassword(userLoginDTO.password);
        return Optional.of(user);
    }
}
