package com.realestate.backend.controller;

import com.realestate.backend.DTO.AppointmentDTO;
import com.realestate.backend.DTO.ConversationDTO;
import com.realestate.backend.model.Appointment;
import com.realestate.backend.model.Property;
import com.realestate.backend.model.User;
import com.realestate.backend.repository.AppointmentRepository;
import com.realestate.backend.repository.PropertyRepository;
import com.realestate.backend.repository.UserRepository;
import com.realestate.backend.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")

public class ConversationController {
    private final MessageService messageService;

    @Autowired
    public ConversationController(MessageService messageService) {

        this.messageService = messageService;
    }


    @GetMapping("/conversations")
    public List<ConversationDTO> getConversations(@RequestParam Long userId) {
        return messageService.getConversationsForUser(userId);
    }

}
