package server.dto;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import server.entity.Chef;
import server.entity.User;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Getter
@Setter
public class BookChefRequestDTO {
    private Instant chefSlot;
    //private List<UUID> chefSkills;
    private UUID chefId;
    private UUID userId;
}



