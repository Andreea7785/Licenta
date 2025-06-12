package com.realestate.backend.DTO;

public class PriceComparisonDTO {
    private String propertyTitle;
    private String listedPrice;
    private double soldPrice;

    public PriceComparisonDTO() {}

    public PriceComparisonDTO(String propertyTitle, String listedPrice, double soldPrice) {
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

    public String getListedPrice() {
        return listedPrice;
    }

    public void setListedPrice(String listedPrice) {
        this.listedPrice = listedPrice;
    }

    public double getSoldPrice() {
        return soldPrice;
    }

    public void setSoldPrice(double soldPrice) {
        this.soldPrice = soldPrice;
    }
}