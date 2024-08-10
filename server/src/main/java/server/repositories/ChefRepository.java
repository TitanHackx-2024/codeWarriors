package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.entity.Chef;

import java.util.List;
import java.util.UUID;

@Repository
public interface ChefRepository extends JpaRepository<Chef, UUID> {
    List<Chef> findByNameLikeIgnoreCase(String name);
    List<Chef> findByRating(double rating);
    List<Chef> findBySkills(String skills);
}