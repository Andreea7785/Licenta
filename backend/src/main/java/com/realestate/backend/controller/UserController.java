package com.realestate.backend.controller;

import com.realestate.backend.model.User;
import com.realestate.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agents")
@CrossOrigin(origins = "http://localhost:5173/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllAgents() {
        List<User> agents = userRepository.findByRole("agent");
        System.out.println("Număr agenți: " + agents.size());
        return agents;
    }

}
