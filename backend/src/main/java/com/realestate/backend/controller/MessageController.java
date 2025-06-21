package com.realestate.backend.controller;

import com.realestate.backend.model.Message;
import com.realestate.backend.repository.MessageRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class MessageController {

    private final MessageRepository messageRepository;

    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @GetMapping
    public List<Message> getMessagesBetweenUsers(
            @RequestParam Long user1,
            @RequestParam Long user2) {
        return messageRepository.findConversationBetweenUsers(user1, user2);
    }
}

