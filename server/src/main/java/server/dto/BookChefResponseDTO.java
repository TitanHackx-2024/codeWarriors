package server.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class BookChefResponseDTO {
    private ResponseStatus responseStatus;
    private UUID bookingId;
    private int amount;
}
