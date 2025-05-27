package com.realestate.backend.model;
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

        @Id
        @Column(name = "user_id")
        private Integer userId;

        private String role;

        private String firstname;

        @Column(name = "lastname")
        private String lastname;

        private String email;

        private String password;

        @Column(name = "phone_number")
        private Integer phoneNumber;

        private String description;

        private byte[] document;
        @Column(name = "profile_picture")
        private String profilePicture;

        public String getProfilePicture() {
                return profilePicture;
        }

        public void setProfilePicture(String profilePicture) {
                this.profilePicture = profilePicture;
        }
        public Integer getUserId() { return userId; }
        public void setUserId(Integer userId) { this.userId = userId; }

        public String getRole() { return role; }
        public void setRole(String role) { this.role = role; }

        public String getFirstname() { return firstname; }
        public void setFirstname(String firstname) { this.firstname = firstname; }

        public String getLastname() { return lastname; }
        public void setLastname(String lastname) { this.lastname = lastname; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }

        public Integer getPhoneNumber() { return phoneNumber; }
        public void setPhoneNumber(Integer phoneNumber) { this.phoneNumber = phoneNumber; }


        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }

        public byte[] getDocument() { return document; }
        public void setDocument(byte[] document) { this.document = document; }
}