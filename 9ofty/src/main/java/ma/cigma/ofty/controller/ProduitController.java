package ma.cigma.ofty.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ma.cigma.ofty.model.Produit;
import ma.cigma.ofty.service.ProduitService;

@RestController
@RequestMapping("/api/produits")
public class ProduitController {

	@Autowired
	ProduitService produitService;

	@PostMapping("/add")
	public Produit create(@RequestBody Produit p) {
		return produitService.insert(p);
	}

	@PutMapping("/update")
	public Produit update(@RequestBody Produit p) {
		return produitService.update(p);
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") long id) {
		produitService.delete(id);
	}

	@GetMapping("/all")
	public List<Produit> getAll() {
		return produitService.findAll();
	}

	@GetMapping("/{nom}")
	public Produit getOne(@PathVariable("nom") String nomProduit) {
		return produitService.findOne(nomProduit);
	}

	@GetMapping(path = "/categorie/{catNom}")
	public Page<Produit> getByCategorie(@PathVariable("catNom") String nomCategorie,
			@RequestParam(defaultValue = "0", name = "page") int page,
			@RequestParam(defaultValue = "12", name = "size") int size) {

		Pageable pageable = PageRequest.of(page, size);

		Page<Produit> pageProduits = produitService.findByCategorie(nomCategorie, pageable);

		return pageProduits;
	}

	@GetMapping("/search")
	public Page<Produit> getByKeyword(@RequestParam(name = "q", defaultValue = "") String keyword,
			@RequestParam(defaultValue = "0", name = "page") int page,
			@RequestParam(defaultValue = "12", name = "size") int size) {

		Pageable pageable = PageRequest.of(page, size);

		Page<Produit> pageProduits = produitService.searchProduitsByKeyword(keyword, pageable);

		return pageProduits;

	}

	@GetMapping("/latest")
	public List<Produit> findLatest() {
		return produitService.findLastTen();
	}

	@GetMapping("/all-reverse")
	public Page<Produit> findAllReverse(@RequestParam(defaultValue = "0", name = "page") int page,
			@RequestParam(defaultValue = "12", name = "size") int size) {

		Pageable pageable = PageRequest.of(page, size);

		Page<Produit> pageProduits = produitService.findAllReverse(pageable);

		return pageProduits;
	}

}
