package com.realestate.backend.DTO;

import com.realestate.backend.DTO.CommissionDTO;
import com.realestate.backend.DTO.MonthlySalesDTO;

import java.util.List;

import java.util.List;

public class FirmReportDTO {

    private List<MonthlySalesDTO> monthlySales;
    private List<CommissionDTO> topAgentCommissions;
    private List<PropertyTypeSalesDTO> propertyTypeSales;

    public FirmReportDTO() {
    }

    public FirmReportDTO(List<MonthlySalesDTO> monthlySales,
                         List<CommissionDTO> topAgentCommissions,
                         List<PropertyTypeSalesDTO> propertyTypeSales) {
        this.monthlySales = monthlySales;
        this.topAgentCommissions = topAgentCommissions;
        this.propertyTypeSales = propertyTypeSales;
    }

    public List<MonthlySalesDTO> getMonthlySales() {
        return monthlySales;
    }

    public void setMonthlySales(List<MonthlySalesDTO> monthlySales) {
        this.monthlySales = monthlySales;
    }

    public List<CommissionDTO> getTopAgentCommissions() {
        return topAgentCommissions;
    }

    public void setTopAgentCommissions(List<CommissionDTO> topAgentCommissions) {
        this.topAgentCommissions = topAgentCommissions;
    }

    public List<PropertyTypeSalesDTO> getPropertyTypeSales() {
        return propertyTypeSales;
    }

    public void setPropertyTypeSales(List<PropertyTypeSalesDTO> propertyTypeSales) {
        this.propertyTypeSales = propertyTypeSales;
    }
}

