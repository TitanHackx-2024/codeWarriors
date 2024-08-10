package server.dto;

import server.entity.User;

import java.util.Optional;

public record UserUpdateDetails (String username, String email, String password, String phoneNumber) {
    public static Optional<User> from(UserUpdateDetails userUpdateDetails) {
        User user = new User();
        user.setUsername(userUpdateDetails.username);
        user.setPassword(userUpdateDetails.password);
        user.setEmail(userUpdateDetails.email);
        user.setPhoneNumber(userUpdateDetails.phoneNumber);
        return Optional.of(user);
    }
}

/*
private String username;
    private String email;
    private String password;
    private Boolean isActive;
    private String phoneNumber;
 */