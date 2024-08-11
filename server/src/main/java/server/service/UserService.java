package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import server.dto.UserResponseDTO;
import server.entity.User;
import server.exception.UnAuthorizedAccess;
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

    public ResponseEntity<UserResponseDTO> loginUser(User incomingUser) {
        Optional<User> userOptional = userRepository.findByEmail(incomingUser.getEmail());
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException(incomingUser.getEmail());
        }
        User user = userOptional.get();
        if(!bCryptPasswordEncoder.matches(incomingUser.getPassword(), user.getPassword())) {
            throw new UnAuthorizedAccess("Password is wrong");
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
    public ResponseEntity<UserResponseDTO> updateUserProfile(User user) {
        User updatedUser = userRepository.findById(user.getId()).get();
        updatedUser.setEmail(user.getEmail());
        updatedUser.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        updatedUser.setPhoneNumber(updatedUser.getPhoneNumber());
        userRepository.save(updatedUser);
        return new ResponseEntity<>(UserResponseDTO.fromUser(updatedUser), OK);
    }


//    public ResponseEntity<List<BookingDTO>> booking()
}
