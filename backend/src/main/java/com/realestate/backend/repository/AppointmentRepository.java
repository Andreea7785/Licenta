package com.realestate.backend.repository;

import com.realestate.backend.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByClient_UserId(Integer clientId);
}
