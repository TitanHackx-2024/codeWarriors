package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.entity.User;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional <User> findByUsername(String username);
    Optional<User> findByEmail(String email);



}
