package com.realestate.backend.DTO;
import java.time.LocalDate;
public class AgentTransactionsDTO {

    private String propertyTitle;
    private Double price;
    private LocalDate date;
    private String clientName;

    public AgentTransactionsDTO(String propertyTitle, Double price, LocalDate date, String clientName) {
        this.propertyTitle = propertyTitle;
        this.price = price;
        this.date = date;
        this.clientName = clientName;
    }
    public String getPropertyTitle() {
        return propertyTitle;
    }

    public void setPropertyTitle(String propertyTitle) {
        this.propertyTitle = propertyTitle;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

}
