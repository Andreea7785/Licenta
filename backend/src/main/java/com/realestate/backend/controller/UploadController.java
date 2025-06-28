package com.realestate.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.UUID;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class UploadController {



    private static final String UPLOAD_DIR = "../imobiliare/public/images/";

    @PostMapping("/upload")
    public ResponseEntity<String> handleImageUpload(@RequestParam("file") MultipartFile file) {
        try {
            String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
            Path path = Paths.get(UPLOAD_DIR + fileName);
            Files.createDirectories(path.getParent()); // creează folderul dacă nu există
            Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);

            // DEBUG:  unde salvează
            System.out.println(">>> Imagine salvată în: " + path.toAbsolutePath());

            return ResponseEntity.ok(fileName); // ex: "uuid_pozamea.jpg"
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Eroare la salvarea imaginii: " + e.getMessage());
        }
    }
}
