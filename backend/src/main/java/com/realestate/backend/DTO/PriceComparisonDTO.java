package com.realestate.backend.DTO;

import java.math.BigDecimal;

public class PriceComparisonDTO {
    private String propertyTitle;
    private BigDecimal listedPrice;
    private double soldPrice;

    public PriceComparisonDTO() {}

    public PriceComparisonDTO(String propertyTitle, BigDecimal listedPrice, double soldPrice) {
        this.propertyTitle = propertyTitle;
        this.listedPrice = listedPrice;
        this.soldPrice = soldPrice;
    }


    public String getPropertyTitle() {
        return propertyTitle;
    }

    public void setPropertyTitle(String propertyTitle) {
        this.propertyTitle = propertyTitle;
    }

    public BigDecimal getListedPrice() {
        return listedPrice;
    }

    public void setListedPrice(BigDecimal listedPrice) {
        this.listedPrice = listedPrice;
    }

    public double getSoldPrice() {
        return soldPrice;
    }

    public void setSoldPrice(double soldPrice) {
        this.soldPrice = soldPrice;
    }
}