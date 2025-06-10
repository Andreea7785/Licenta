package com.realestate.backend.repository;
import com.realestate.backend.model.PropertyRequestForm;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PropertyRequestFormRepository extends JpaRepository<PropertyRequestForm, Long> {
    List<PropertyRequestForm> findByClient_UserId(Integer userId);
}
