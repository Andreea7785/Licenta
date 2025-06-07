package com.realestate.backend.services;

import com.realestate.backend.DTO.UserDTO;
import com.realestate.backend.model.User;
import com.realestate.backend.repository.UserRepository;
import com.realestate.backend.utils.HashUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class UserServices {
    @Autowired
    private UserRepository userRepository;


    public Optional<UserDTO> register(String firstName, String lastName, String email, String phoneNumber,
                                      String password, byte[] image, String role) {

        if (userRepository.findByEmail(email).isPresent()) {
            return Optional.empty(); // Email deja folosit
        }

        User user = new User();
        user.setFirstname(firstName);
        user.setLastname(lastName);
        user.setEmail(email);
        user.setPhoneNumber(phoneNumber);
        user.setPassword(HashUtil.hashPassword(password));
        user.setDocument(image);
        user.setRole(role);

        User savedUser = userRepository.save(user);
        return Optional.of(new UserDTO(savedUser));
    }

    public Optional<UserDTO> login(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent() &&
                user.get().getPassword().equals(HashUtil.hashPassword(password))) {

            return Optional.of(new UserDTO(user.get()));
        }
        return Optional.empty();

    }
}
