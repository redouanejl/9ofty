package ma.cigma.ofty.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import ma.cigma.ofty.model.Client;
import ma.cigma.ofty.model.Commande;

@Repository
@CrossOrigin("*")
public interface CommandeRepository extends JpaRepository<Commande, Long> {

	List<Commande> findByClient(Client client);
	
	List<Commande> findTop10ByOrderByIdDesc();
}
