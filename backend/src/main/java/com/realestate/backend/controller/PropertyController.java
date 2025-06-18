package com.realestate.backend.controller;
import com.realestate.backend.model.Property;
import com.realestate.backend.model.User;
import com.realestate.backend.repository.PropertyRepository;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.realestate.backend.DTO.PropertyDTO;
import com.realestate.backend.repository.UserRepository;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "http://localhost:5173")
public class PropertyController {

    private final PropertyRepository propertyRepository;
    private final UserRepository userRepository;

    public PropertyController(PropertyRepository propertyRepository, UserRepository userRepository) {
        this.propertyRepository = propertyRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/latest")
    public List<Property> getLatestProperties() {
        return propertyRepository.findTop3ByOrderByListingDateDesc();
    }


    @GetMapping("/{id}")
    public ResponseEntity<Property> getPropertyById(@PathVariable Long id) {
        return propertyRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> createProperty(@RequestBody PropertyDTO dto) {
        try {
            Property property = new Property();

            property.setTitle(dto.getTitle());
            property.setDescription(dto.getDescription());
            property.setType(dto.getType());
            property.setPrice(dto.getPrice());
            property.setAdress(dto.getAdress());
            property.setCity(dto.getCity());
            property.setFloor(dto.getFloor());
            property.setCompartmentalization(dto.getCompartmentalization());
            property.setRooms(dto.getRooms());
            property.setBathrooms(dto.getBathrooms());
            property.setYear(dto.getYear());
            property.setArea(dto.getArea());
            property.setSurface(dto.getSurface());
            property.setSuitable_for(dto.getSuitable_for());
            property.setFacilities(dto.getFacilities().toArray(new String[0]));
            property.setImages(String.join(",", dto.getImages()));
            property.setListing_date(LocalDate.now());

            if (dto.getAgent_asigned() == null) {
                return ResponseEntity.badRequest().body("Agent email is missing");
            }

            Optional<User> agent = userRepository.findByEmail(dto.getAgent_asigned());
            if (agent.isEmpty()) {
                return ResponseEntity.badRequest().body("Agent not found for email: " + dto.getAgent_asigned());
            }

            property.setAgent(agent.get());

            Property saved = propertyRepository.save(property);
            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            e.printStackTrace(); // sau logger.error("Error saving property", e);
            return ResponseEntity.status(500).body("Internal server error: " + e.getMessage());
        }
    }

    @GetMapping("/agent")
    public ResponseEntity<List<Property>> getPropertiesByAgentEmail(@RequestParam String email) {
        System.out.println("Email primit la backend: " + email);

        if (email == null || email.isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        List<Property> properties = propertyRepository.findByAgentEmail(email);
        return ResponseEntity.ok(properties);
    }





}
