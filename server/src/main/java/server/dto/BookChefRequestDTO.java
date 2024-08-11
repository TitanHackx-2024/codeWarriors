package server.dto;

import lombok.Getter;
import lombok.Setter;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class BookChefRequestDTO {
    private List<UUID> chefSlot;
    private List<UUID> chefSkills;
    private UUID chefId;
    private UUID userId;
}
