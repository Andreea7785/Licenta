package com.realestate.backend.controller;
import com.realestate.backend.DTO.AgentTransactionsDTO;
import com.realestate.backend.services.TransactionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

        import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private TransactionsService transactionService;

    @GetMapping("/agent/{agentId}")
    public List<AgentTransactionsDTO> getAgentTransactions(@PathVariable Integer agentId) {
        return transactionService.getTransactionsForAgent(agentId);
    }
}
