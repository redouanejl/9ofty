package ma.cigma.ofty.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import ma.cigma.ofty.model.Client;

public interface ClientService {
	
	Client insert(Client c);
	
	Client update(Client c);
	
	void delete(Long id);
	
	Client findOne(Long id);
	
	List<Client> findAll();
	
	Page<Client> findAllReverse(Pageable pageable);
	
	List<Client> findLatest();

}
