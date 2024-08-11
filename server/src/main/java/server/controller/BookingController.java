package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.dto.BookChefRequestDTO;
import server.dto.BookChefResponseDTO;
import server.dto.ChefDTO;
import server.dto.ResponseStatus;
import server.entity.Booking;
import server.service.BookingService;
import server.service.UserService;

import java.time.Instant;
import java.util.UUID;

@RestController
@RequestMapping("/api/booking/")
public class BookingController {
    private final BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("bookchef")
    public BookChefResponseDTO bookChef(@RequestBody BookChefRequestDTO request){
        BookChefResponseDTO response = new BookChefResponseDTO();
        try {

            Booking booking = bookingService.bookChef(
                    request.getChefSlot(),
                    //request.getChefSkills(),
                    request.getChefId(),
                    request.getUserId()
            );
            response.setBookingId((UUID) booking.getId());
            response.setAmount(booking.getAmount());
            response.setResponseStatus(ResponseStatus.SUCCESS);
        } catch(Exception ex){
            response.setResponseStatus(ResponseStatus.FAILURE);
        }
        return response;
    }
}
