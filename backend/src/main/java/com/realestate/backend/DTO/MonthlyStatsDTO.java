package com.realestate.backend.DTO;

public class MonthlyStatsDTO {
    private String month;
    private Long appointments;
    private Long sales;

    public MonthlyStatsDTO(String month, Long appointments, Long sales) {
        this.month = month;
        this.appointments = appointments;
        this.sales = sales;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public Long getAppointments() {
        return appointments;
    }

    public void setAppointments(Long appointments) {
        this.appointments = appointments;
    }

    public Long getSales() {
        return sales;
    }

    public void setSales(Long sales) {
        this.sales = sales;
    }
}
