package com.realestate.backend.controller;

import com.realestate.backend.DTO.ConversationDTO;
import com.realestate.backend.model.ChatMessage;
import com.realestate.backend.model.Message;
import com.realestate.backend.model.Property;
import com.realestate.backend.model.User;
import com.realestate.backend.repository.MessageRepository;
import com.realestate.backend.repository.PropertyRepository;
import com.realestate.backend.repository.UserRepository;
import com.realestate.backend.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class ChatController {

    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private MessageService messageService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PropertyRepository propertyRepository;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;
    @MessageMapping("/chat.private.{receiverId}")
    @SendToUser("/queue/messages")
    public ChatMessage sendPrivate(@DestinationVariable String receiverId,
                                   ChatMessage message,
                                   SimpMessageHeaderAccessor headerAccessor) {
        System.out.println("Send to user: " + message.getReceiverId());

        messagingTemplate.convertAndSendToUser(
                message.getReceiverId(), "/queue/messages", message
        );
        // Salvare în DB
        Long senderId = Long.parseLong(message.getSenderId());
        Long recId = Long.parseLong(message.getReceiverId());

        Optional<User> senderOpt = userRepository.findById(Math.toIntExact(senderId));
        Optional<User> receiverOpt = userRepository.findById(Math.toIntExact(recId));

        if (senderOpt.isEmpty() || receiverOpt.isEmpty()) {
            throw new RuntimeException("Sender sau receiver inexistent");
        }

        Message entity = new Message();
        entity.setSender(senderOpt.get());
        entity.setReceiver(receiverOpt.get());
        entity.setContent(message.getContent());

        if (message.getPropertyId() != null) {
            Property property = propertyRepository.findById(message.getPropertyId()).orElse(null);
            entity.setProperty(property);
        }
        messageRepository.save(entity);

        return message;
    }

}
