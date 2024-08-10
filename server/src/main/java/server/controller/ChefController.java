package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.dto.ChefResponseDTO;
import server.entity.Chef;
import server.exception.UserNotFoundException;
import server.service.ChefService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/chefs")
public class ChefController {
    @Autowired
    private ChefService chefService;

    @GetMapping
    public List<Chef> getAllChefs() {
        return chefService.getAllChefs();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ChefResponseDTO> getChefById(@PathVariable UUID id) {
        return chefService.getChefById(id);
    }

    @PostMapping
    public Chef createChef(@RequestBody Chef chef) {
        return chefService.saveChef(chef);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ChefResponseDTO> updateChef(@PathVariable UUID id, @RequestBody Chef chefDetails) {
        ResponseEntity<ChefResponseDTO> chef = chefService.getChefById(id);

           if(chef != null){
               throw new UserNotFoundException("Cheff not found");
           }
        return chef;
    }

}
