package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.entity.User;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    User findByUsername(String username);
    User findByEmail(String email);



}
