package ma.cigma.ofty.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import ma.cigma.ofty.model.Commande;
import ma.cigma.ofty.model.LigneCommande;

@Repository
@CrossOrigin("*")
public interface LigneCommandeRepository extends JpaRepository<LigneCommande, Long> {

	List<LigneCommande> findByCommande(Commande commande);
	
	@Transactional
	@Modifying
	@Query(value = "delete from LigneCommande l where l.id= ?1")
	void deleteLigne(long id);
}
