package ma.cigma.ofty.service;

import java.util.List;

import ma.cigma.ofty.model.Commande;
import ma.cigma.ofty.model.LigneCommande;

public interface LigneCommandeService {
	
	LigneCommande createLigneCommande(LigneCommande ligneCommande);
	
	LigneCommande updateLigneCommande(LigneCommande ligneCommande);
	
	void deleteLigneCommande(long id);
	
	LigneCommande selectLigneCommande(Long id);
	
	List<LigneCommande> selectLigneCommandes();
	
	List<LigneCommande> getLignesByCommande(Commande commande);

}
