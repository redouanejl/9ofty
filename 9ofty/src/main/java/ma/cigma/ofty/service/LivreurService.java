package ma.cigma.ofty.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import ma.cigma.ofty.model.Livreur;

public interface LivreurService {
	
	Livreur insert(Livreur l);
	
	Livreur update(Livreur l);
	
	void delete(long id);
	
	List<Livreur> findAll();
	
	Livreur getLivreur(long id);
	
	Page<Livreur> findAllReverse(Pageable pageable);
	
	List<Livreur> findLatest();

}
