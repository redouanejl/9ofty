package ma.cigma.ofty.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ma.cigma.ofty.dao.CategorieRepository;
import ma.cigma.ofty.model.Categorie;

@Service
@Transactional
public class CategorieServiceImpl implements CategorieService {

	@Autowired
	CategorieRepository repository;

	@Override
	public Categorie insert(Categorie c) {

		return repository.save(c);
	}

	@Override
	public Categorie update(Categorie c) {
		Categorie old = repository.findById(c.getId()).get();

		old.setNom(c.getNom());
		old.setListeProduits(c.getListeProduits());

		return repository.save(old);
	}

	@Override
	public void delete(int id) {

		repository.deleteById(id);
	}

	@Override
	public Categorie findOne(String nomCategorie) {

		return repository.findByNom(nomCategorie);
	}

	@Override
	public Page<Categorie> selectCategories(String nom, Pageable pageable) {

		return repository.findByNomContaining(nom, pageable);
	}

	@Override
	public List<Categorie> findAll() {

		return repository.findAll();
	}

	@Override
	public List<Categorie> findLatest() {

		return repository.findTop10ByOrderByIdDesc();
	}

	@Override
	public Page<Categorie> findAllReverse(Pageable pageable) {
		
		return repository.findAllByOrderByIdDesc(pageable);
	}

}
