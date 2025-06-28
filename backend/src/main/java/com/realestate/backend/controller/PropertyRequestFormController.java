package com.realestate.backend.controller;

import com.realestate.backend.DTO.PropertyRequestFormDTO;
import com.realestate.backend.model.PropertyRequestForm;
import com.realestate.backend.model.User;
import com.realestate.backend.repository.PropertyRequestFormRepository;
import com.realestate.backend.repository.UserRepository;
import com.realestate.backend.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/property-requests")
@CrossOrigin(origins = "http://localhost:5173")
public class PropertyRequestFormController {

    @Autowired
    private PropertyRequestFormRepository requestRepository;

    @Autowired
    private UserRepository userRepository;


    @PostMapping("/create")
    public ResponseEntity<?> createRequest(@RequestBody PropertyRequestFormDTO body) {
        try {
            Integer clientId = body.getClientId();
            String description = body.getDescription();

            Optional<User> userOpt = userRepository.findById(clientId);
            if (userOpt.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Clientul nu a fost găsit.");
            }

            PropertyRequestForm request = new PropertyRequestForm();
            request.setClient(userOpt.get());
            request.setDescription(description);

            PropertyRequestForm saved = requestRepository.save(request);


            return ResponseEntity.status(HttpStatus.CREATED).body(saved);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Eroare la salvarea cererii: " + e.getMessage());
        }
    }
}
