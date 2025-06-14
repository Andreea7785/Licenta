package com.realestate.backend.controller;
import com.realestate.backend.model.Property;
import com.realestate.backend.repository.PropertyRepository;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "http://localhost:5173")
public class PropertyController {

    private final PropertyRepository propertyRepository;

    public PropertyController(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
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

//    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//    public ResponseEntity<String> addProperty(@ModelAttribute PropertyDTO propertyDTO) {
//        Property property = new Property(propertyDTO);
//        propertyRepository.save(property);
//        return ResponseEntity.ok("Proprietate adăugată cu succes!");
//    }
}
