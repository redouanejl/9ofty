package ma.cigma.ofty.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import ma.cigma.ofty.model.Categorie;

public interface CategorieService {

	Categorie insert(Categorie c);
	
	Categorie update(Categorie c);
	
	void delete(int id);
	
	Categorie findOne(String nomCategorie);
	
	List<Categorie> findAll();
	
	Page<Categorie> selectCategories(String nom,Pageable pageable);
	
	List<Categorie> findLatest();
	
	Page<Categorie> findAllReverse(Pageable pageable);
	
}
