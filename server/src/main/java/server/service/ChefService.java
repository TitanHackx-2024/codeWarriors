package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import server.dto.ChefListResponseDTO;
import server.dto.ChefResponseDTO;
import server.entity.Chef;
import server.repositories.ChefRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.springframework.http.HttpStatus.OK;

@Service
public class ChefService {

    @Autowired
    private ChefRepository chefRepository;

    public ResponseEntity<List<ChefResponseDTO>> getAllChefs() {
        java.util.List<Chef> chefList = chefRepository.findAll();
        return new ResponseEntity<List<ChefResponseDTO>>(ChefListResponseDTO.from(chefList), OK);
    }

    public ResponseEntity<ChefResponseDTO> getChefById(UUID id) {
        Optional<Chef> chef = chefRepository.findById(id);
        return new ResponseEntity<>(ChefResponseDTO.fromChef(chef.get()), OK);
    }

    public ResponseEntity<ChefResponseDTO> saveChef(Chef chef) {
        chefRepository.save(chef);
        return ResponseEntity.ok(ChefResponseDTO.fromChef(chef));
    }

    public void deleteChef(UUID id) {
        chefRepository.deleteById(id);
    }
    public List<Chef> findChefByNameLike(String firstnamePart){
        List<Chef> cheffs = chefRepository.findByNameLikeIgnoreCase(firstnamePart);
        return cheffs;
    }
    public List<Chef> findChefRating(double rating){
        List<Chef> cheffs = chefRepository.findByRating(rating);
        return cheffs;
    }
    public List<Chef> findChefBySkills(String skills){
        List<Chef> cheffs = chefRepository.findBySkills(skills);
        return cheffs;
    }
}