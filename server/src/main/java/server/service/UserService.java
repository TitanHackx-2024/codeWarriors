package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import server.dto.UserResponseDTO;
import server.entity.User;
import server.exception.UserNotFoundException;
import server.repositories.UserRepository;
import java.util.Optional;
import java.util.UUID;
import static org.springframework.http.HttpStatus.OK;

@Service
public class UserService {
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
        this.userRepository = userRepository;
    }
    public ResponseEntity<UserResponseDTO> createUser(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return ResponseEntity.ok(UserResponseDTO.fromUser(user));
    }

    public ResponseEntity<UserResponseDTO> loginUser(User user) {
        Optional<User> userOptional = Optional.ofNullable(userRepository.findByEmail(user.getEmail()));
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException(user.getEmail());
        }
        return new ResponseEntity<>(UserResponseDTO.fromUser(user), OK);
    }

    public ResponseEntity<UserResponseDTO> getDetails(UUID id) {
        Optional<User> userOptional = userRepository.findById(id);
        if(userOptional.isEmpty()) {
            throw new UserNotFoundException("User not found");
        }
        return new ResponseEntity<>(UserResponseDTO.fromUser(userOptional.get()), OK);
    }
    public ResponseEntity<User> updateUserProfile(User user) {
        return new ResponseEntity<>(userRepository.save(user), OK);
    }
}
