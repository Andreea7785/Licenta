package com.realestate.backend.model;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "users")
public class User {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "user_id")
        private Integer userId;

        private String role;

        private String firstname;

        @Column(name = "lastname")
        private String lastname;

        private String email;

        private String password;

        @Column(name = "phone_number")
        private String phoneNumber;

        private String description;

        private byte[] document;
        @Column(name = "profile_picture")
        private String profilePicture;
        @OneToMany(mappedBy = "agent")
        private List<Property> properties;

        public String getProfilePicture() {
                return profilePicture;
        }

        public void setProfilePicture(String profilePicture) {
                this.profilePicture = profilePicture;
        }

        @Column(name = "title")
        private String title;

        public String getTitle() {
                return title;
        }

        public void setTitle(String title) {
                this.title = title;
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

        public String getPhoneNumber() { return phoneNumber; }
        public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }


        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }

        public byte[] getDocument() { return document; }
        public void setDocument(byte[] document) { this.document = document; }

        public String getFullName(){
                return this.firstname + " " + this.lastname;
        }
}