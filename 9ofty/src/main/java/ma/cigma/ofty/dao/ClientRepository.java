package ma.cigma.ofty.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.cigma.ofty.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

	Page<Client> findAllByOrderByIdDesc(Pageable pageable);
	
	List<Client> findTop10ByOrderByIdDesc();
}
