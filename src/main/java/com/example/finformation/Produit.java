package com.example.finformation;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProd;
    private String nomProd;
    private int quantiteStock;
    private double prix;

    @ManyToOne
    @JoinColumn(name = "idFour")
    private Fournisseur fournisseur;

    @OneToMany(mappedBy = "produit")
    private List<LigneCMD> ligneCmds;

    public void setIdProd(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setIdProd'");
    }

    // getters and setters
}

