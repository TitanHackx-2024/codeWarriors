package server.service;

import org.hibernate.usertype.LoggableUserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.entity.Booking;
import server.entity.BookingStatus;
import server.repositories.BookingRepository;
import server.repositories.UserRepository;

import java.util.List;
import java.util.UUID;

@Service
public class BookingService {
    private final UserRepository userRepository;

    private final BookingRepository bookingRepository;

    @Autowired
    BookingService(UserRepository userRepository, BookingRepository bookingRepository) {
        this.userRepository = userRepository;
        this.bookingRepository = bookingRepository;

    }

    public Booking bookChef(
            List<UUID> chefSlot,
            List<UUID> chefSkills,
            UUID showId,
            UUID userId
    ){
        // 1. Get the User from userId
        // 2. Get the Chef from chefId

        // ------- Transaction start -------
        // 3. Get the chefSlots from Ids
        // 4. Check if all the slots are available
        // 5. If No, throw error return the response
        // 6. If yes, make the slot as blocked

        // -- Transaction stops
        // 8. Create a corresponding booking object
        Booking booking = new Booking();
        //booking.setChefSlot();
        //booking.setBookingStatus(BookingStatus.PENDING);
        //booking.setBookedAt(new Date());
        //booking.setAmount(100);
        //booking.setPayments(new ArrayList<>());
        bookingRepository.save(booking);
        // 9. return the booking object

        return booking;
    }
}
