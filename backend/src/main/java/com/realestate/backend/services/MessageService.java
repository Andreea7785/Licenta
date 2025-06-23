package com.realestate.backend.services;

import com.realestate.backend.DTO.ConversationDTO;
import com.realestate.backend.model.Message;
import com.realestate.backend.repository.MessageRepository;
import com.realestate.backend.repository.PropertyRepository;
import com.realestate.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PropertyRepository propertyRepository;

    public List<ConversationDTO> getConversationsForUser(Long userId) {
        List<Message> messages = messageRepository.findMessagesForUser(userId);

        Map<String, Message> latestMessages = new LinkedHashMap<>();

        for (Message msg : messages) {
            Integer senderId = msg.getSender().getUserId();
            Integer receiverId = msg.getReceiver().getUserId();
            Integer minId = Math.min(senderId, receiverId);
            Integer maxId = Math.max(senderId, receiverId);
            Long propertyId = msg.getProperty() != null ? msg.getProperty().getProperty_id() : null;

            String key = minId + "_" + maxId + "_" + (propertyId != null ? propertyId : "null");

            // Dacă nu există încă o conversație cu cheia respectivă, o adăugăm
            latestMessages.putIfAbsent(key, msg);
        }

        List<ConversationDTO> result = new ArrayList<>();

        for (Message msg : latestMessages.values()) {
            Integer otherId = msg.getSender().getUserId().equals(userId)
                    ? msg.getSender().getUserId()
                    : msg.getReceiver().getUserId();

            String otherName = msg.getSender().getUserId().equals(userId)
                    ? msg.getSender().getFullName()
                    : msg.getReceiver().getFullName();

            Long propertyId = msg.getProperty() != null ? msg.getProperty().getProperty_id() : null;
            String propertyTitle = msg.getProperty() != null ? msg.getProperty().getTitle() : "";

            // Construiește un ID unic (string) pentru conversație
            String conversationKey = generateConversationKey(
                    Math.min(userId, otherId),
                    Math.max(userId, otherId),
                    propertyId
            );

            result.add(new ConversationDTO(
                    conversationKey,
                    otherId,
                    otherName,
                    propertyId,
                    propertyTitle,
                    msg.getContent()
            ));
        }

        return result;
    }

    private String generateConversationKey(Long id1, Long id2, Long propertyId) {
        return id1 + "_" + id2 + "_" + (propertyId != null ? propertyId : "null");
    }



}
