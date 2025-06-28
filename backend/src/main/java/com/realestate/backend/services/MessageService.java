package com.realestate.backend.services;

import com.realestate.backend.DTO.ConversationDTO;
import com.realestate.backend.model.Message;
import com.realestate.backend.model.User;
import com.realestate.backend.repository.MessageRepository;
import com.realestate.backend.repository.PropertyRepository;
import com.realestate.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserRepository userRepository;


    public List<ConversationDTO> getConversationsForUser(Long userId) {
        // Preia toate mesajele în care utilizatorul este sender sau receiver
        List<Message> messages = messageRepository.findMessagesForUser(userId);

        // Hărți auxiliare
        Map<Long, Message> latestMsgMap = new HashMap<>();
        Map<Long, Integer> unreadMap = new HashMap<>();

        for (Message m : messages) {
            Long sender = m.getSender().getUserId().longValue();
            Long receiver = m.getReceiver().getUserId().longValue();

            // Identificăm celălalt user din conversație
            Long otherId = sender.equals(userId) ? receiver : sender;

            // Ignorăm conversațiile cu noi înșine
            if (otherId.equals(userId)) {
                continue;
            }

            // Actualizăm ultimul mesaj
            Message prev = latestMsgMap.get(otherId);
            if (prev == null || m.getTimestamp().after(prev.getTimestamp())) {
                latestMsgMap.put(otherId, m);
            }

            // Contorizăm mesajele necitite primite de la otherId
            if (sender.equals(otherId) && receiver.equals(userId)) {
                unreadMap.put(otherId, unreadMap.getOrDefault(otherId, 0) + 1);
            }
        }

        // Construim lista DTO pentru frontend
        return latestMsgMap.entrySet().stream()
                .map(entry -> {
                    Long otherId = entry.getKey();
                    Message lastMsg = entry.getValue();

                    User otherUser = lastMsg.getSender().getUserId().equals(otherId)
                            ? lastMsg.getSender()
                            : lastMsg.getReceiver();


                    // Determinăm numele celuilalt user
                    String otherName = lastMsg.getSender().getUserId().equals(otherId)
                            ? lastMsg.getSender().getFullName()
                            : lastMsg.getReceiver().getFullName();

                    int unread = unreadMap.getOrDefault(otherId, 0);

                    return new ConversationDTO(otherId, otherName, lastMsg.getContent(), unread, otherUser.getProfilePicture());
                })
                // Optional: sortează după timestamp al ultimului mesaj (descendent)
                .sorted((d1, d2) -> d2.getLastMessage().compareTo(d1.getLastMessage()))
                .collect(Collectors.toList());
    }


    private String generateConversationKey(Long id1, Long id2) {
        return id1 + "_" + id2;
    }



}
