package com.realestate.backend.DTO;

import java.math.BigDecimal;

public class MonthlySalesDTO {
    private String month;
    private BigDecimal totalSales;
    public MonthlySalesDTO(String month, BigDecimal totalSales) {
        this.month = month;
        this.totalSales = totalSales;
    }
    public String getMonth() { return month; }
    public BigDecimal getTotalSales() { return totalSales; }
}