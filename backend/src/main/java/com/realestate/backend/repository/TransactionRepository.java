package com.realestate.backend.repository;


import com.realestate.backend.DTO.PriceComparisonDTO;
import com.realestate.backend.model.Transaction;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface TransactionRepository extends CrudRepository<Transaction, Integer> {

    @Query("SELECT new com.realestate.backend.DTO.PriceComparisonDTO(p.title, p.price, t.price) " +
            "FROM Transaction t JOIN Property p ON t.propertyId = p.property_id " +
            "WHERE t.agentId = :agentId")
    List<PriceComparisonDTO> getPriceComparisons(@Param("agentId") Integer agentId);


    @Query("SELECT p.type, COUNT(p) " +
            "FROM Transaction t JOIN Property p ON t.propertyId = p.property_id " +
            "WHERE t.agentId = :agentId " +
            "GROUP BY p.type")
    List<Object[]> getSoldPropertyTypeCounts(@Param("agentId") Integer agentId);

    @Query("SELECT EXTRACT(MONTH FROM t.date) AS month, COUNT(*) FROM Transaction t WHERE t.agentId = :agentId AND t.date >= :startDate GROUP BY month ORDER BY month")
    List<Object[]> countTransactionsByMonth(@Param("agentId") Integer agentId, @Param("startDate") LocalDate startDate);


    @Query(value = """
    SELECT 
        TRIM(TO_CHAR(t.date, 'Month')) AS month,
        SUM(t.price) AS total
    FROM transactions t
    JOIN users u ON t.agent_id = u.user_id
    WHERE u.role = 'agent'
    GROUP BY TRIM(TO_CHAR(t.date, 'Month')), EXTRACT(MONTH FROM t.date)
    ORDER BY EXTRACT(MONTH FROM t.date)
""", nativeQuery = true)
    List<Object[]> getMonthlyFirmSales();


    @Query(value = """
    SELECT 
        CONCAT(u.firstname, ' ', u.lastname) AS agent,
        SUM(t.price) AS total
    FROM transactions t
    JOIN users u ON t.agent_id = u.user_id
    WHERE u.role = 'agent'
      AND t.date >= current_date - interval '1 year'
    GROUP BY agent
    ORDER BY total DESC
    LIMIT 3
""", nativeQuery = true)
    List<Object[]> getTop4AgentCommissionsLastYear();

    @Query(value = """
    SELECT p.type, SUM(t.price)
    FROM transactions t
    JOIN properties p ON t.property_id = p.property_id
    WHERE t.date >= CURRENT_DATE - INTERVAL '1 year'
    GROUP BY p.type
""", nativeQuery = true)
    List<Object[]> getSalesPerPropertyTypeLastYear();

}
