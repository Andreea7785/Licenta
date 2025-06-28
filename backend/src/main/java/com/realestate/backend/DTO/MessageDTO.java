package com.realestate.backend.DTO;

import com.realestate.backend.model.Message;

import java.sql.Timestamp;

public class MessageDTO {
    private Long id;
    private Integer senderId;
    private Integer receiverId;
    private String content;
    private Timestamp timestamp;

    // Constructor care mapează din entitatea Message
    public MessageDTO(Message message) {
        this.id = message.getId();
        this.senderId = message.getSender().getUserId();
        this.receiverId = message.getReceiver().getUserId();
        this.content = message.getContent();
        this.timestamp = message.getTimestamp();
    }

    public MessageDTO() {
    }

    // Getteri
    public Long getId() {
        return id;
    }

    public Integer getSenderId() {
        return senderId;
    }

    public Integer getReceiverId() {
        return receiverId;
    }

    public String getContent() {
        return content;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    // Setteri
    public void setId(Long id) {
        this.id = id;
    }

    public void setSenderId(Integer senderId) {
        this.senderId = senderId;
    }

    public void setReceiverId(Integer receiverId) {
        this.receiverId = receiverId;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
}
