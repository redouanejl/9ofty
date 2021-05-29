package ma.cigma.ofty.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import ma.cigma.ofty.model.Categorie;

@Repository
@CrossOrigin("*")
public interface CategorieRepository extends JpaRepository<Categorie, Integer> {

	Page<Categorie> findByNomContaining(@RequestParam("nom") String nom,Pageable pageable);

	Categorie findByNom(@RequestParam("nom") String nom);
	
	List<Categorie> findTop10ByOrderByIdDesc();
	
	Page<Categorie> findAllByOrderByIdDesc(Pageable pageable);
}
