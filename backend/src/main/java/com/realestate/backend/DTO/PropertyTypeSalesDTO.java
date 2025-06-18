package com.realestate.backend.DTO;

import java.math.BigDecimal;

public class PropertyTypeSalesDTO {
    private String type;
    private BigDecimal total;

    public PropertyTypeSalesDTO(String type, BigDecimal total) {
        this.type = type;
        this.total = total;
    }
    public String getType() { return type; }
    public BigDecimal getTotalSales() { return total; }

}

