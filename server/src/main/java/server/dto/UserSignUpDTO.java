package server.dto;

import server.entity.Role;
import server.entity.User;


public record UserSignUpDTO(String name, String password, String email, String phoneNumber, String role) {
    
    public static User from(UserSignUpDTO incomingUser) {
        User user = new User();
        user.setUsername(incomingUser.name);
        user.setPassword(incomingUser.password);
        user.setEmail(incomingUser.email.toLowerCase());
        user.setPhoneNumber(incomingUser.phoneNumber);
        user.setIsActive(true);
        if(incomingUser.role.equals(Role.USER.toString())){
            user.setRoles(Role.USER);
        }
        return user;
    }
}
