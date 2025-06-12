package com.realestate.backend.controller;

import com.realestate.backend.DTO.MonthlyStatsDTO;
import com.realestate.backend.DTO.TransactionReportDTO;
import com.realestate.backend.services.ReportService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "http://localhost:5173")

public class ReportController {

    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @GetMapping("/reports")
    public ResponseEntity<TransactionReportDTO> getTransactionReport(@RequestParam("agentId") Integer agentId) {
        return ResponseEntity.ok(reportService.getAgentTransactionReport(agentId));
    }




}