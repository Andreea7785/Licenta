package com.realestate.backend.repository;

import com.realestate.backend.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByClient_UserId(Integer clientId);

    @Query(value = "SELECT EXTRACT(MONTH FROM a.date) AS month, COUNT(*) " +
            "FROM appointments a " +
            "WHERE a.agent_id = :agentId AND a.date >= :startDate " +
            "GROUP BY month ORDER BY month", nativeQuery = true)
    List<Object[]> countAppointmentsByMonth(@Param("agentId") Integer agentId,
                                            @Param("startDate") LocalDate startDate);





}
