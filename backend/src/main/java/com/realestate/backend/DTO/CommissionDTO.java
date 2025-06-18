package com.realestate.backend.DTO;

import java.math.BigDecimal;

public class CommissionDTO {
    private String agent;
    private BigDecimal total;
    public CommissionDTO(String agent, BigDecimal total) {
        this.agent = agent;
        this.total = total;
    }
    public String getAgent() { return agent; }
    public BigDecimal getTotal() { return total; }
}