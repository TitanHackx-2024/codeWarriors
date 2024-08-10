package server.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.dto.UserResponseDTO;
import server.dto.UserSignUpDTO;
import server.entity.User;
import server.service.UserService;

@RestController
@RequestMapping("/api/users/")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping("signup")
    public ResponseEntity<UserResponseDTO> signup(UserSignUpDTO userSignUpDTO) {
        User user = UserSignUpDTO.from(userSignUpDTO);
        return userService.createUser(user);
    }

}
