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
            "WHERE t.status IN ('Finalizat', 'Anulat') AND t.agentId = :agentId")
    List<PriceComparisonDTO> getPriceComparisons(@Param("agentId") Integer agentId);


    @Query("SELECT p.type, COUNT(p) " +
            "FROM Transaction t JOIN Property p ON t.propertyId = p.property_id " +
            "WHERE t.status IN ('Finalizat', 'Anulat') AND t.agentId = :agentId " +
            "GROUP BY p.type")
    List<Object[]> getSoldPropertyTypeCounts(@Param("agentId") Integer agentId);

    @Query("SELECT EXTRACT(MONTH FROM t.date) AS month, COUNT(*) FROM Transaction t WHERE t.agentId = :agentId AND t.date >= :startDate GROUP BY month ORDER BY month")
    List<Object[]> countTransactionsByMonth(@Param("agentId") Integer agentId, @Param("startDate") LocalDate startDate);



}
