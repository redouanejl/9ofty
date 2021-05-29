package ma.cigma.ofty.service;

import java.util.List;

import ma.cigma.ofty.model.Client;
import ma.cigma.ofty.model.Commande;

public interface CommandeService {

	Commande createCommande(Commande c);
	
	Commande updateCommande(Commande c);
	
	void deleteCommande(Long id);
	
	Commande selectCommande(Long id);
	
	List<Commande> selectCommandes();
	
	List<Commande> selectCommandesByClient(Client c);
	
	List<Commande> findLatest();
}
