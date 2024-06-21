package com.example.finformation;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idClient;
    private String nom;
    private String prenom;

    @OneToMany(mappedBy = "client")
    private List<Commande> commandes;

    public void setIdClient(Long id) {
        
        throw new UnsupportedOperationException("Unimplemented method 'setIdClient'");
    }

    // getters and setters
}

