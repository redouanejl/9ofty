package ma.cigma.ofty.dao;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import ma.cigma.ofty.model.Produit;

@Repository
@CrossOrigin("*")
public interface ProduitsRepository extends JpaRepository<Produit, Long> {
	
	Page<Produit> findByCategorieNom(@RequestParam("nom") String nom, Pageable pageable);
	
	Page<Produit> findByNomContaining(@RequestParam("nom") String nom,Pageable pageable);

	Produit findByNom(@RequestParam("nom") String nom);
	
	List<Produit> findTop10ByOrderByIdDesc();
	
	Page<Produit> findAllByOrderByIdDesc(Pageable pageable);
}
