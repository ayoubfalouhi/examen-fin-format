package com.example.finformation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finformation.Commande;
import com.example.finformation.LigneCMD;
import com.example.finformation.repository.CommandeRepository;

@Service
public class CommandeService {
    @Autowired
    private CommandeRepository commandeRepository;

    public List<Commande> getAllCommandes() {
        return commandeRepository.findAll();
    }

    public Commande getCommandeById(Long id) {
        return commandeRepository.findById(id).orElse(null);
    }

    public Commande createCommande(Commande commande) {
        return commandeRepository.save(commande);
    }

    public Commande updateCommande(Long id, Commande commande) {
        commande.setIdCMD(id);
        return commandeRepository.save(commande);
    }

    public void deleteCommande(Long id) {
        commandeRepository.deleteById(id);
    }

    public List<LigneCMD> getLignesByCommandeId(Long id) {
        return commandeRepository.findLigneCMDByCommandeIdCMD(id);
    }
}

