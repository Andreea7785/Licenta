package com.realestate.backend.DTO;

public class ConversationDTO {
    private Long id;
    private String name;
    private String lastMessage;
    private int unreadCount;

    private String profilePicture;

    public ConversationDTO() {
    }

    public ConversationDTO(Long id, String name, String lastMessage, int unreadCount, String profilePicture) {
        this.id = id;
        this.name = name;
        this.lastMessage = lastMessage;
        this.unreadCount = unreadCount;
        this.profilePicture = profilePicture;
    }

    // Getteri
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLastMessage() {
        return lastMessage;
    }

    public int getUnreadCount() {
        return unreadCount;
    }

    public String getProfilePicture() {return profilePicture;}

    public void setProfilePicture(String profilePicture) { this.profilePicture = profilePicture;}

    // Setteri
    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLastMessage(String lastMessage) {
        this.lastMessage = lastMessage;
    }

    public void setUnreadCount(int unreadCount) {
        this.unreadCount = unreadCount;
    }
}
