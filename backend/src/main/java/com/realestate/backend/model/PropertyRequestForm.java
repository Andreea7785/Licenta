package com.realestate.backend.model;

import com.realestate.backend.model.User;
import jakarta.persistence.*;

@Entity
@Table(name = "property_request_form")
public class PropertyRequestForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "request_id")
    private Long requestId;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private User client;

    @Column(name = "description")
    private String description;

    public Long getRequestId() {
        return requestId;
    }

    public void setRequestId(Long requestId) {
        this.requestId = requestId;
    }

    public User getClient() {
        return client;
    }

    public void setClient(User client) {
        this.client = client;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


}
