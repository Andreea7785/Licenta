package com.realestate.backend.repository;

import com.realestate.backend.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

    @Query("""
    SELECT m FROM Message m 
    WHERE (m.sender.id = :user1 AND m.receiver.id = :user2) 
       OR (m.sender.id = :user2 AND m.receiver.id = :user1)
    ORDER BY m.timestamp ASC
""")
    List<Message> findConversationBetweenUsers(@Param("user1") Long user1, @Param("user2") Long user2);


    @Query("""
        SELECT m FROM Message m 
        WHERE (m.sender.id = :userId OR m.receiver.id = :userId)
        ORDER BY m.timestamp DESC
    """)
    List<Message> findMessagesForUser(@Param("userId") Long userId);

    @Query("""
        SELECT COUNT(m) FROM Message m
        WHERE m.receiver.id = :userId AND m.sender.id = :senderId
    """)
    int countUnread(@Param("userId") Long userId, @Param("senderId") Long senderId);

}

