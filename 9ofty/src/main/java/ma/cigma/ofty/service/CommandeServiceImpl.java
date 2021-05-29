package ma.cigma.ofty.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ma.cigma.ofty.dao.CommandeRepository;
import ma.cigma.ofty.model.Client;
import ma.cigma.ofty.model.Commande;

@Service
@Transactional
public class CommandeServiceImpl implements CommandeService {

	@Autowired
	CommandeRepository commandeRepository;

	@Override
	public Commande createCommande(Commande c) {
		return commandeRepository.save(c);
	}

	@Override
	public Commande updateCommande(Commande c) {
		Commande old = commandeRepository.findById(c.getId()).get();

		old.setDate(c.getDate());
		old.setRef(c.getRef());
		old.setStatut(c.getStatut());
		old.setTypePaiement(c.getTypePaiement());
		old.setBillingAdresse(c.getBillingAdresse());
		old.setShippingAdresse(c.getShippingAdresse());
		old.setClient(c.getClient());
		old.setLivreur(c.getLivreur());

		return commandeRepository.save(old);
	}

	@Override
	public void deleteCommande(Long id) {
		
		commandeRepository.deleteById(id);
	}

	@Override
	public Commande selectCommande(Long id) {
		
		return commandeRepository.findById(id).get();
	}

	@Override
	public List<Commande> selectCommandes() {
		
		return commandeRepository.findAll();
	}

	@Override
	public List<Commande> selectCommandesByClient(Client c) {
		
		return commandeRepository.findByClient(c);
	}

	@Override
	public List<Commande> findLatest() {
		
		return commandeRepository.findTop10ByOrderByIdDesc();
	}

}
