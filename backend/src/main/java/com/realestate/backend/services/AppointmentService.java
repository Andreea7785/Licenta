package com.realestate.backend.services;

import com.realestate.backend.model.Appointment;
import com.realestate.backend.model.Property;
import com.realestate.backend.model.User;
import com.realestate.backend.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;

    @Autowired
    public AppointmentService(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }


}
