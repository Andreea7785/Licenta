package com.realestate.backend.repository;
import com.realestate.backend.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PropertyRepository extends JpaRepository<Property, Long> {
    List<Property> findTop3ByOrderByListingDateDesc();

}
