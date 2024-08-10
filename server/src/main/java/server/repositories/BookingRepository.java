package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.entity.Booking;
import server.entity.User;

import java.util.UUID;

public interface BookingRepository extends JpaRepository<User, UUID> {
        Booking save(Booking entity);
}
