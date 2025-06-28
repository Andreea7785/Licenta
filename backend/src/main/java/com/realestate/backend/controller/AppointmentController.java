package com.realestate.backend.controller;

import com.realestate.backend.DTO.AppointmentDTO;
import com.realestate.backend.model.Appointment;
import com.realestate.backend.model.Property;
import com.realestate.backend.model.User;
import com.realestate.backend.repository.AppointmentRepository;
import com.realestate.backend.repository.PropertyRepository;
import com.realestate.backend.repository.UserRepository;
import com.realestate.backend.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")

public class AppointmentController {
    private final UserRepository userRepository;
    private final PropertyRepository propertyRepository;
    private final AppointmentRepository appointmentRepository;

    @Autowired
    private EmailService emailService;


    @Autowired
    public AppointmentController(AppointmentRepository appointmentRepository,
                                 UserRepository userRepository,
                                 PropertyRepository propertyRepository) {
        this.appointmentRepository = appointmentRepository;
        this.userRepository = userRepository;
        this.propertyRepository = propertyRepository;
    }
    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<Appointment>> getAppointmentsByClient(@PathVariable Integer clientId) {
        List<Appointment> appointments = appointmentRepository.findByClient_UserId(clientId);
        return ResponseEntity.ok(appointments);
    }

//
//    @GetMapping("/{clientId}")
//    public List<Appointment> getAppointmentsByClientId(@PathVariable Integer clientId) {
//        return appointmentRepository.findByClient_UserId(clientId);
//    }

    @PostMapping(
            value = "/create",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Object> createAppointment(@RequestBody AppointmentDTO request) {
        Map<String, Object> response = new HashMap<>();

        User client = userRepository.findById(request.getClient_id()).orElse(null);
        if (client == null) {
            response.put("error", true);
            response.put("message", "Clientul cu ID " + request.getClient_id() + " nu a fost găsit.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }

        Property property = propertyRepository.findById(request.getProperty_id()).orElse(null);
        if (property == null) {
            response.put("error", true);
            response.put("message", "Proprietatea cu ID " + request.getProperty_id() + " nu a fost găsită.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }


        Appointment appointment = new Appointment();
        appointment.setClient(client);
        appointment.setProperty(property);
        appointment.setObservations(request.getObservations());

        // parsează data din string
        try {
            LocalDateTime parsedDate = LocalDateTime.parse(request.getDate());
            appointment.setDate(parsedDate);
        } catch (DateTimeParseException e) {
            response.put("error", true);
            response.put("message", "Format invalid pentru dată. Așteptat: YYYY-MM-DDTHH:mm");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
        appointment.setStatus("Trimis");


        appointment.setCreationDate(LocalDate.now());

        Appointment saved = appointmentRepository.save(appointment);
        response.put("error", false);
        response.put("message", "Programare creată cu succes.");
        AppointmentDTO responseDto = new AppointmentDTO();
        responseDto.setClient_id(saved.getClient().getUserId());
        responseDto.setProperty_id(saved.getProperty().getProperty_id());
        responseDto.setDate(saved.getDate().toString());
        responseDto.setObservations(saved.getObservations());
        responseDto.setStatus(saved.getStatus());

        response.put("appointment", responseDto);

        User agent = property.getAgent();
        emailService.sendSimpleEmail(agent.getEmail(), "Test subj", "Merge tot bine programare");

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

}
