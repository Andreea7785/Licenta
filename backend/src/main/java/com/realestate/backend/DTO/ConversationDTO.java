package com.realestate.backend.DTO;

public class ConversationDTO {

    private String conversationKey;
    private Integer id;
    private String name;
    private String propertyTitle;
    private String lastMessage;

    private Long propertyId;

    public ConversationDTO(String conversationKey, Integer id, String name, Long propertyId, String propertyTitle, String lastMessage) {
        this.conversationKey = conversationKey;
        this.id = id;
        this.name = name;
        this.propertyId = propertyId;
        this.propertyTitle = propertyTitle;
        this.lastMessage = lastMessage;
    }

    public Integer getId() {
        return id;
    }

    public String getConversationKey() {
        return conversationKey;
    }


    public Long getPropertyId() {
        return propertyId;
    }

    public String getName() {
        return name;
    }

    public String getPropertyTitle() {
        return propertyTitle;
    }

    public String getLastMessage() {
        return lastMessage;
    }
}
