package ma.cigma.ofty.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

import ma.cigma.ofty.dao.ClientRepository;
import ma.cigma.ofty.model.Client;

@Service
@Transactional
@CrossOrigin("http://localhost:4200")
public class ClientServiceImpl implements ClientService {

	@Autowired
	ClientRepository repository;

	@Override
	public Client insert(Client c) {

		return repository.save(c);
	}

	@Override
	public Client update(Client c) {

		Client old = repository.findById(c.getId()).get();

		old.setTitreSocial(c.getTitreSocial());
		old.setNom(c.getNom());
		old.setPrenom(c.getPrenom());
		old.setEmail(c.getEmail());
		old.setMotDePasse(c.getMotDePasse());
		old.setDateNaissance(c.getDateNaissance());
		old.setStatut(c.getStatut());
		old.setBillingAdresse(c.getBillingAdresse());
		old.setShippingAdresse(c.getShippingAdresse());
		old.setListeCommandes(c.getListeCommandes());

		return repository.save(old);
	}

	@Override
	public void delete(Long id) {

		repository.deleteById(id);
	}

	@Override
	public Client findOne(Long id) {

		return repository.findById(id).get();
	}

	@Override
	public List<Client> findAll() {

		return repository.findAll();
	}

	@Override
	public Page<Client> findAllReverse(Pageable pageable) {

		return repository.findAllByOrderByIdDesc(pageable);
	}

	@Override
	public List<Client> findLatest() {

		return repository.findTop10ByOrderByIdDesc();
	}

}
