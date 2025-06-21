package com.realestate.backend.controller;

import com.realestate.backend.model.ChatMessage;
import com.realestate.backend.model.Message;
import com.realestate.backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class ChatController {

    @Autowired
    private MessageRepository messageRepository;

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
        Message entity = new Message();
        entity.setSenderId(message.getSenderId());
        entity.setReceiverId(message.getReceiverId());
        entity.setContent(message.getContent());
        messageRepository.save(entity);

        return message;
    }



}
