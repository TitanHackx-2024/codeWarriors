package server.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.dto.UserLoginDTO;
import server.dto.UserResponseDTO;
import server.dto.UserSignUpDTO;
import server.entity.User;
import server.exception.UserNotFoundException;
import server.service.UserService;
import java.util.Optional;
import java.util.UUID;

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
    @PostMapping("login")
    public ResponseEntity<UserResponseDTO> login(UserLoginDTO userLoginDTO) {
        Optional<User> user = UserLoginDTO.from(userLoginDTO);
        if(user.isEmpty()) {
            throw new UserNotFoundException("User not found");
        }
        return userService.loginUser(user.get());
    }

    @GetMapping("{id}")
    public ResponseEntity<UserResponseDTO> getDetails(@RequestParam UUID userId) {
        return userService.getDetails(userId);
    }
}
