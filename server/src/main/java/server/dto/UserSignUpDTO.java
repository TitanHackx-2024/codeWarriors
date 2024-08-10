package server.dto;

import lombok.Getter;
import lombok.Setter;
import server.entity.Role;
import server.entity.User;

import java.util.Locale;

@Getter
public record UserSignUpDTO(String name, String password, String email, String phoneNumber) {
    
    public static User from(UserSignUpDTO incomingUser) {
        User user = new User();
        user.setUsername(incomingUser.name);
        user.setPassword(incomingUser.password);
        user.setEmail(incomingUser.email.toLowerCase());
        user.setPhoneNumber(incomingUser.phoneNumber);
        user.setIsActive(true);
        user.setRoles(Role.USER);
        return user;
    }
}
