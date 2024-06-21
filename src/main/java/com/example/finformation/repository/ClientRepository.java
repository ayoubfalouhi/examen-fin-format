package com.example.finformation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.finformation.Client;
import com.example.finformation.Commande;

public interface ClientRepository extends JpaRepository<Client, Long> {
    List<Commande> findCommandesByClientIdClient(Long idClient);
}

