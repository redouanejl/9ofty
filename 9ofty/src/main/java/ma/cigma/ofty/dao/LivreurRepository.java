package ma.cigma.ofty.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.cigma.ofty.model.Livreur;

@Repository
public interface LivreurRepository extends JpaRepository<Livreur, Long> {

	Page<Livreur> findAllByOrderByIdDesc(Pageable pageable);
	
	List<Livreur> findTop10ByOrderByIdDesc();
}
