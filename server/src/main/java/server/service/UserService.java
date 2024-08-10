package server.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import server.dto.UserResponseDTO;
import server.entity.User;
import server.repositories.UserRepository;

import static org.springframework.http.HttpStatus.OK;

@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public ResponseEntity<UserResponseDTO> createUser(User user) {
        userRepository.save(user);
        return new ResponseEntity<>(UserResponseDTO.fromUser(user), OK);
    }

}
