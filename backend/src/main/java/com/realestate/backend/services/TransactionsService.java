package com.realestate.backend.services;
import com.realestate.backend.DTO.AgentTransactionsDTO;
import com.realestate.backend.model.Property;
import com.realestate.backend.model.Transaction;
import com.realestate.backend.model.User;
import com.realestate.backend.repository.PropertyRepository;
import com.realestate.backend.repository.TransactionRepository;
import com.realestate.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TransactionsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private PropertyRepository propertyRepository;


    public List<AgentTransactionsDTO> getTransactionsForAgent(Integer agentId) {
        List<Transaction> transactions = transactionRepository.findTransactionsByAgentId(agentId);

        return transactions.stream().map(t -> {
            Property property = propertyRepository.findById(t.getPropertyId().longValue()).orElse(null);
            User client = userRepository.findById(t.getClientId()).orElse(null);

            String title = property != null ? property.getTitle() : "Titlu indisponibil";
            String clientName = client != null ? client.getFirstname() + " " + client.getLastname() : "Client necunoscut";

            return new AgentTransactionsDTO(title, t.getPrice(), t.getDate(), clientName);
        }).collect(Collectors.toList());
    }
}

