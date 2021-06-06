package ma.cigma.ofty.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.cigma.ofty.model.Client;
import ma.cigma.ofty.model.Commande;
import ma.cigma.ofty.model.LigneCommande;
import ma.cigma.ofty.service.ClientService;
import ma.cigma.ofty.service.CommandeService;
import ma.cigma.ofty.service.LigneCommandeService;

@RestController
@RequestMapping("/api/cart")
public class CommandeController {

	@Autowired
	private ClientService clientService;

	@Autowired
	private CommandeService commandeService;
	
	@Autowired
	private LigneCommandeService ligneCommandeService;
	

	@GetMapping("/{id}")
	public Commande getCart(@PathVariable("id") long clientId) {

		Client client = clientService.findOne(clientId);

		List<Commande> commandes = commandeService.selectCommandesByClient(client);

		if (commandes.isEmpty()) {
			Commande commande = new Commande();
			commande.setClient(client);
			commande.setStatut("panier");

			commandes.add(commande);

			client.setListeCommandes(commandes);

			clientService.update(client);

			return commandes.get(commandes.size() - 1);

		} else {

			for (Commande commande : commandes) {

				if (commande.getStatut().contains("panier")) {
					return commande;
				}

			}

			Commande commande = new Commande();
			commande.setClient(client);
			commande.setStatut("panier");

			commandes.add(commande);

			client.setListeCommandes(commandes);

			clientService.update(client);

			return commandes.get(commandes.size() - 1);

		}

	}
	
	@PostMapping("/save")
	public Commande saveCart(@RequestBody Commande commande) {
		
		return commandeService.createCommande(commande);
	}
	
	
	@GetMapping("/{id}/lignesCommande")
	public List<LigneCommande> getLignesCommande(@PathVariable("id") long id){
		
		Commande commande = commandeService.selectCommande(id);
		
		if(commande == null) {
			return new ArrayList<LigneCommande>();
		}else {
			return ligneCommandeService.getLignesByCommande(commande);
		}
		
	}
	
	@PostMapping("/saveLigne")
	public LigneCommande saveLigneCommande(@RequestBody LigneCommande ligne) {
		
		return ligneCommandeService.createLigneCommande(ligne);
	}
	
	@DeleteMapping("/deleteLigne/{id}")
	public void deleteLigneCommande(@PathVariable long id) {
		
		ligneCommandeService.deleteLigneCommande(id);
		
	}
}
