package com.realestate.backend.repository;
import com.realestate.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
        List<User> findByRole(String role);

    Optional<User> findByEmail(String email);
}


