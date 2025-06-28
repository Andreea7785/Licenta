package com.realestate.backend.controller;

import com.realestate.backend.DTO.MessageDTO;
import com.realestate.backend.model.Message;
import com.realestate.backend.repository.MessageRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class MessageController {

    private final MessageRepository messageRepository;

    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @GetMapping
    public List<MessageDTO> getMessagesBetweenUsers(
            @RequestParam Long user1,
            @RequestParam Long user2) {
        List<Message> messages = messageRepository.findConversationBetweenUsers(user1, user2);

        return messages.stream()
                .map(MessageDTO::new)
                .collect(Collectors.toList());
    }
}

