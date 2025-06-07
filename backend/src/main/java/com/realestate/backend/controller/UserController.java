package com.realestate.backend.controller;

import com.realestate.backend.DTO.UserDTO;
import com.realestate.backend.model.User;
import com.realestate.backend.repository.UserRepository;
import com.realestate.backend.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    private UserServices userService;

    public UserController(UserServices userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllAgents() {
        List<User> agents = userRepository.findByRole("agent");
        System.out.println("Număr agenți: " + agents.size());
        return agents;
    }
    @GetMapping("/{id}")
    public ResponseEntity<User> getAgentById(@PathVariable Integer id) {
        Optional<User> agent = userRepository.findById(id);
        if (agent.isPresent()) {
            return ResponseEntity.ok(agent.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping(value = "/register", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> register(
            @RequestParam String firstName,
            @RequestParam String lastName,
            @RequestParam String email,
            @RequestParam String phoneNumber,
            @RequestParam String password,
            @RequestParam String role,
            @RequestParam("document") MultipartFile imageFile
    ) {
        try {
            byte[] image = imageFile.getBytes();

            Optional<UserDTO> optionalUser = userService.register(firstName, lastName, email, phoneNumber, password, image, role);

            if (optionalUser.isEmpty()) {
                return ResponseEntity.status(HttpStatus.CONFLICT)
                        .body("Emailul este deja folosit.");
            }

            return ResponseEntity.ok(optionalUser.get());

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Eroare la înregistrare: " + e.getMessage());
        }
    }

    @PostMapping(value = "/login", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> login(@RequestParam String email, @RequestParam String password) {

        Optional<UserDTO> optionalUser = userService.login(email, password);
        if (!optionalUser.isEmpty()) {
            return ResponseEntity.ok(optionalUser.get());

        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email sau parola incorecta");
        }
    }


}
