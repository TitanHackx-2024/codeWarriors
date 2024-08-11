package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.dto.*;
import server.entity.Chef;
import server.entity.User;
import server.exception.UserNotFoundException;
import server.service.ChefService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/chefs")
public class ChefController {
    @Autowired
    private ChefService chefService;

    @GetMapping("/getAllChefs")
    public ResponseEntity<List<ChefResponseDTO>> getAllChefs() {
        return chefService.getAllChefs();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ChefResponseDTO> getChefById(@PathVariable UUID id) {
        return chefService.getChefById(id);
    }

    @PostMapping("/addChef")
    public ResponseEntity<ChefResponseDTO> createChef(@RequestBody ChefDTO chefDTO) {
        Chef chef = ChefDTO.from(chefDTO);
        return chefService.saveChef(chef);
    }

    @PutMapping("/updateChef/{id}")
    public ResponseEntity<ChefResponseDTO> updateChef(@PathVariable UUID id, @RequestBody ChefDTO chefDTO) {
        Chef chef = ChefDTO.from(chefDTO);

        ResponseEntity<ChefResponseDTO> chefResponse = chefService.saveChef(chef);

           if(chefResponse == null){
               throw new UserNotFoundException("Cheff not found");
           }
        return chefResponse;
    }

}
