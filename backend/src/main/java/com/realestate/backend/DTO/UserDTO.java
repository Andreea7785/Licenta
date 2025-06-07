package com.realestate.backend.DTO;
import lombok.Data;

import com.realestate.backend.model.User;
@Data
public class UserDTO {

    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String role;

    // Constructor
    public UserDTO(User user) {
        this.id = user.getUserId();
        this.firstName = user.getFirstname();
        this.lastName = user.getLastname();
        this.email = user.getEmail();
        this.phoneNumber = user.getPhoneNumber();
        this.role = user.getRole();
    }

}
