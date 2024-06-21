package com.example.finformation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.finformation.Produit;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
    List<Produit> findByFournisseurIdFour(Long idFour);
}

