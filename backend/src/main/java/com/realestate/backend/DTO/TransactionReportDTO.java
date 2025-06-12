package com.realestate.backend.DTO;

import java.util.List;
import java.util.Map;

public class TransactionReportDTO {
    private List<PriceComparisonDTO> priceComparisons;
    private Map<String, Integer> soldPropertyTypes;

    public TransactionReportDTO() {}

    private List<MonthlyAppointmentsTransactionsDTO> monthlyStats;

    public List<MonthlyAppointmentsTransactionsDTO> getMonthlyStats() {
        return monthlyStats;
    }

    public void setMonthlyStats(List<MonthlyAppointmentsTransactionsDTO> monthlyStats) {
        this.monthlyStats = monthlyStats;
    }


    public TransactionReportDTO(List<PriceComparisonDTO> priceComparisons,
                                Map<String, Integer> soldPropertyTypes,
                                List<MonthlyAppointmentsTransactionsDTO> monthlyStats) {
        this.priceComparisons = priceComparisons;
        this.soldPropertyTypes = soldPropertyTypes;
        this.monthlyStats = monthlyStats;
    }

    public List<PriceComparisonDTO> getPriceComparisons() {
        return priceComparisons;
    }

    public void setPriceComparisons(List<PriceComparisonDTO> priceComparisons) {
        this.priceComparisons = priceComparisons;
    }

    public Map<String, Integer> getSoldPropertyTypes() {
        return soldPropertyTypes;
    }

    public void setSoldPropertyTypes(Map<String, Integer> soldPropertyTypes) {
        this.soldPropertyTypes = soldPropertyTypes;
    }
}