package ma.cigma.ofty.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.cigma.ofty.model.Commande;
import ma.cigma.ofty.model.LigneCommande;

@Repository
public interface LigneCommandeRepository extends JpaRepository<LigneCommande, Long> {

	List<LigneCommande> findByCommande(Commande c);
}
