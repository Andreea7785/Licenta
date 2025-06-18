package com.realestate.backend.services;


import com.realestate.backend.DTO.MonthlyAppointmentsTransactionsDTO;
import com.realestate.backend.DTO.MonthlyStatsDTO;
import com.realestate.backend.DTO.PriceComparisonDTO;
import com.realestate.backend.DTO.TransactionReportDTO;
import com.realestate.backend.repository.AppointmentRepository;
import com.realestate.backend.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

@Service
public class ReportService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private TransactionRepository transactionRepository;


    public ReportService(TransactionRepository transactionRepository, AppointmentRepository appointmentRepository) {
        this.transactionRepository = transactionRepository;
        this.appointmentRepository = appointmentRepository;
    }


    public TransactionReportDTO getAgentTransactionReport(Integer agentId) {
        List<PriceComparisonDTO> priceData = transactionRepository.getPriceComparisons(agentId);
        List<Object[]> typeData = transactionRepository.getSoldPropertyTypeCounts(agentId);

        Map<String, Integer> typeMap = new HashMap<>();
        for (Object[] row : typeData) {
            typeMap.put((String) row[0], ((Long) row[1]).intValue());
        }

        List<MonthlyAppointmentsTransactionsDTO> monthlyStats = getMonthlyStats(agentId);

        return new TransactionReportDTO(priceData, typeMap, monthlyStats);
//        return new TransactionReportDTO(null, typeMap, monthlyStats); //adaugat
    }

    private List<MonthlyAppointmentsTransactionsDTO> getMonthlyStats(Integer agentId) {
        LocalDate oneYearAgo = LocalDate.now().minusYears(1);

        List<Object[]> appointmentCounts = appointmentRepository.countAppointmentsByMonth(agentId, oneYearAgo);
        List<Object[]> transactionCounts = transactionRepository.countTransactionsByMonth(agentId, oneYearAgo);

        Map<Integer, Integer> appointmentMap = new HashMap<>();
        for (Object[] row : appointmentCounts) {
            int month = ((Number) row[0]).intValue();
            int count = ((Long) row[1]).intValue();
            appointmentMap.put(month, count);
        }

        Map<Integer, Integer> transactionMap = new HashMap<>();
        for (Object[] row : transactionCounts) {
            int month = ((Number) row[0]).intValue();
            int count = ((Long) row[1]).intValue();
            transactionMap.put(month, count);
        }

        List<MonthlyAppointmentsTransactionsDTO> monthlyStats = new ArrayList<>();
        for (int month = 1; month <= 12; month++) {
            int appointments = appointmentMap.getOrDefault(month, 0);
            int transactions = transactionMap.getOrDefault(month, 0);
            monthlyStats.add(new MonthlyAppointmentsTransactionsDTO(month, appointments, transactions));
        }

        return monthlyStats;
    }



}