package com.realestate.backend.DTO;

public class PropertyRequestFormDTO {
    public PropertyRequestFormDTO(Integer clientId, String description) {
        this.clientId = clientId;
        this.description = description;
    }

    public PropertyRequestFormDTO() {}

    private Integer clientId;
    private String description;

    public Integer getClientId() {
        return clientId;
    }

    public void setClientId(Integer clientId) {
        this.clientId = clientId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


}
