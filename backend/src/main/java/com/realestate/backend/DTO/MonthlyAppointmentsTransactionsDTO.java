package com.realestate.backend.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MonthlyAppointmentsTransactionsDTO {
    private int month;
    private int appointments;
    private int transactions;

    public MonthlyAppointmentsTransactionsDTO(int month, int appointments, int transactions) {
        this.month = month;
        this.appointments = appointments;
        this.transactions = transactions;
    }

    @JsonProperty
    public int getMonth() {
        return month;
    }

    @JsonProperty
    public int getAppointments() {
        return appointments;
    }

    @JsonProperty
    public int getTransactions() {
        return transactions;
    }
}
