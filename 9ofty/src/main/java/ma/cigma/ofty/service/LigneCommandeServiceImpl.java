package ma.cigma.ofty.service;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.cigma.ofty.dao.LigneCommandeRepository;
import ma.cigma.ofty.model.Commande;
import ma.cigma.ofty.model.LigneCommande;

@Service
@Transactional
@CrossOrigin("http://localhost:4200")
public class LigneCommandeServiceImpl implements LigneCommandeService {

	@Autowired
	LigneCommandeRepository ligneCommandeRepository;
	
	@Override
	public LigneCommande createLigneCommande(LigneCommande ligneCommande) {
		
		return ligneCommandeRepository.save(ligneCommande);
	}

	@Override
	public LigneCommande updateLigneCommande(LigneCommande ligneCommande) {
		
		LigneCommande old = ligneCommandeRepository.findById(ligneCommande.getId()).get();
		
		old.setCommande(ligneCommande.getCommande());
		old.setProduit(ligneCommande.getProduit());
		old.setQuantite(ligneCommande.getQuantite());
		
		return ligneCommandeRepository.save(old);
	}

	@Override
	public void deleteLigneCommande(long id) {
		
		ligneCommandeRepository.deleteById(id);
	}

	@Override
	public LigneCommande selectLigneCommande(Long id) {
		
		return ligneCommandeRepository.findById(id).get();
	}

	@Override
	public List<LigneCommande> selectLigneCommandes() {
		
		return ligneCommandeRepository.findAll();
	}

	@Override
	public List<LigneCommande> selectLigneByCommande(Commande c) {
		
		return ligneCommandeRepository.findByCommande(c);
	}

}
