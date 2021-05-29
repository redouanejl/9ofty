package ma.cigma.ofty.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ma.cigma.ofty.dao.LivreurRepository;
import ma.cigma.ofty.model.Livreur;

@Service
@Transactional
public class LivreurServiceImpl implements LivreurService{
	
	@Autowired
	private LivreurRepository repository;

	@Override
	public Livreur insert(Livreur l) {
		
		return repository.save(l);
	}

	@Override
	public Livreur update(Livreur l) {
		Livreur old = repository.findById(l.getId()).get();
		old.setNom(l.getNom());
		old.setPrenom(l.getPrenom());
		old.setEmail(l.getEmail());
		old.setMotDePasse(l.getMotDePasse());
		old.setDateNaissance(l.getDateNaissance());
		old.setStatut(l.getStatut());
		old.setMatricule(l.getMatricule());
		old.setLattitude(l.getLattitude());
		old.setLongitude(l.getLongitude());
		old.setListeStockes(l.getListeStockes());
		old.setListeCommandes(l.getListeCommandes());
		
		return repository.save(old);
	}

	@Override
	public void delete(long id) {
		
		repository.deleteById(id);
	}

	@Override
	public List<Livreur> findAll() {
		
		return repository.findAll();
	}

	@Override
	public Livreur getLivreur(long id) {
		
		return repository.findById(id).get();
	}

	@Override
	public Page<Livreur> findAllReverse(Pageable pageable) {
		
		return repository.findAllByOrderByIdDesc(pageable);
	}

	@Override
	public List<Livreur> findLatest() {
		
		return repository.findTop10ByOrderByIdDesc();
	}

}
