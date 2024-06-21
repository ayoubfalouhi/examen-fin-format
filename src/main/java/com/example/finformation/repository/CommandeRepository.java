package com.example.finformation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.finformation.Commande;
import com.example.finformation.LigneCMD;
public interface CommandeRepository extends JpaRepository<Commande, Long> {
    List<LigneCMD> findLigneCMDByCommandeIdCMD(Long idCMD);

    List<Commande> findByClientIdClient(Long id);
}

