package ma.cigma.ofty.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ma.cigma.ofty.dao.ProduitsRepository;
import ma.cigma.ofty.model.Produit;

@Service
@Transactional
public class ProduitServiceImpl implements ProduitService {

	@Autowired
	ProduitsRepository pr;

	@Override
	public Produit insert(Produit p) {
		return pr.save(p);
	}

	@Override
	public Produit update(Produit p) {
		Produit old = (Produit) pr.findById(p.getId()).get();

		old.setId(p.getId());
		old.setNom(p.getNom());
		old.setImage(p.getImage());
		old.setPrix(p.getPrix());
		old.setContenance(p.getContenance());
		old.setStatut(p.getStatut());
		old.setCategorie(p.getCategorie());

		return pr.save(old);
	}

	@Override
	public void delete(long id) {
		pr.deleteById(id);
	}

	@Override
	public Produit findOne(String nomProduit) {

		return pr.findByNom(nomProduit);
	}

	@Override
	public Page<Produit> findByCategorie(String nomCategorie, Pageable pageable) {

		return pr.findByCategorieNom(nomCategorie, pageable);
	}

	@Override
	public Page<Produit> searchProduitsByKeyword(String nomProduit, Pageable pageable) {

		return pr.findByNomContaining(nomProduit, pageable);

	}

	@Override
	public List<Produit> findAll() {

		return pr.findAll();
	}

	@Override
	public List<Produit> findLastTen() {
		return pr.findTop10ByOrderByIdDesc();
	}

	@Override
	public Page<Produit> findAllReverse(Pageable pageable) {
		
		return pr.findAllByOrderByIdDesc(pageable);
	}

}
