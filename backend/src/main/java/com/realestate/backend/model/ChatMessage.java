package com.realestate.backend.model;

public class ChatMessage {
    private String senderId;
    private String receiverId;
    private String content;

    private Long propertyId; // 🔥 acest câmp e esențial

    public ChatMessage() {}
    public ChatMessage(String senderId, String receiverId, String content) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.content = content;
    }

    public String getSenderId() { return senderId; }
    public void setSenderId(String senderId) { this.senderId = senderId; }

    public String getReceiverId() { return receiverId; }
    public void setReceiverId(String receiverId) { this.receiverId = receiverId; }

    public Long getPropertyId() { return propertyId; }
    public void setPropertyId(Long propertyId) { this.propertyId = propertyId; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
}
