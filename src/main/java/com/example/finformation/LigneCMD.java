package com.example.finformation;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class LigneCMD {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idLigneCMD;
    private int quantite;

    @ManyToOne
    @JoinColumn(name = "idCMD")
    private Commande commande;

    @ManyToOne
    @JoinColumn(name = "idProd")
    private Produit produit;

	public void setIdLigneCMD(Long id) {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'setIdLigneCMD'");
	}

    // getters and setters
}
