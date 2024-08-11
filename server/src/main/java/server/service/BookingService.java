package server.service;

import org.hibernate.usertype.LoggableUserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.entity.Booking;
import server.entity.BookingStatus;
import server.entity.Chef;
import server.entity.User;
import server.repositories.BookingRepository;
import server.repositories.ChefRepository;
import server.repositories.UserRepository;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BookingService {
    private final UserRepository userRepository;
    private  final ChefRepository chefRepository;

    private final BookingRepository bookingRepository;

    @Autowired
    BookingService(UserRepository userRepository, ChefRepository chefRepository, BookingRepository bookingRepository) {
        this.userRepository = userRepository;
        this.bookingRepository = bookingRepository;
        this.chefRepository = chefRepository;
    }

    public Booking bookChef(
            UUID chefSlot,
            List<UUID> chefSkills,
            UUID chefId,
            UUID userId
    ){
        // 1. Get the User from userId
        Optional<User> userOptional = userRepository.findById(userId);
        if(userOptional.isEmpty()){
            throw new RuntimeException("user not found");
        }
        User user = userOptional.get();

        // 2. Get the Chef from chefId
        Optional<Chef> chefOptional = chefRepository.findById(chefId);
        if(chefOptional.isEmpty()){
            throw new RuntimeException("chef not found");
        }
        Chef chef = chefOptional.get();

        // ------- Transaction start -------
        // 3. Get the chefSlots from Ids
        // 4. Check if all the slots are available
        // 5. If No, throw error return the response
        // 6. If yes, make the slot as blocked

        // -- Transaction stops
        // 8. Create a corresponding booking object
        Booking booking = new Booking();
        booking.setChef(chef);
        booking.setUser(user);
        //booking.setChefSlot();
        booking.setBookingStatus(BookingStatus.PENDING);
        booking.setBookedAt(Instant.now());
        booking.setAmount(100);
        booking.setPayments(new ArrayList<>());
        bookingRepository.save(booking);
        // 9. return the booking object

        return booking;
    }
}
