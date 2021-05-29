package ma.cigma.ofty.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import ma.cigma.ofty.model.Produit;

public interface ProduitService {

	Produit insert(Produit p);
	
	Produit update(Produit p);
	
	void delete(long id);
	
	Page<Produit> findByCategorie(String nomCategorie, Pageable pageable);
	
	Page<Produit> searchProduitsByKeyword(String nomProduit, Pageable pageable);
	
	Produit findOne(String nomProduit);
	
	List<Produit> findAll();
	
	List<Produit> findLastTen();
	
	Page<Produit> findAllReverse(Pageable pageable);
}
