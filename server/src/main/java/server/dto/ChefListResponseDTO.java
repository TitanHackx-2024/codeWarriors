package server.dto;


import java.util.ArrayList;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import server.entity.Chef;
@Getter
@Setter
public class ChefListResponseDTO{
    private static List<ChefResponseDTO> chefListResponseDTOS;

    public static List<ChefResponseDTO> from(List<Chef> chefList){
        chefListResponseDTOS = new ArrayList<>();
        for(Chef chef : chefList){
            ChefResponseDTO chefResponseDTO = new ChefResponseDTO(chef.getName(),chef.getSkills(),chef.getAvailability(),chef.getPhoneNumber(), chef.getRating());
            chefListResponseDTOS.add(chefResponseDTO);
        }
        return chefListResponseDTOS;
    }
}
