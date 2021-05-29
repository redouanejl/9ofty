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

import ma.cigma.ofty.model.Categorie;
import ma.cigma.ofty.service.CategorieService;

@RestController
@RequestMapping("/api/categories")
public class CategorieController {

	@Autowired
	CategorieService categorieService;
	
	@PostMapping("/add")
	public Categorie CreatedBy(@RequestBody Categorie c) {
		return categorieService.insert(c);
	}
	
	@PutMapping("/update")
	public Categorie update(@RequestBody Categorie c) {
		return categorieService.update(c);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") int id) {
		categorieService.delete(id);
	}

	@GetMapping("/{nom}")
	public Categorie findCategorie(@PathVariable("nom") String nomCategorie) {
		return categorieService.findOne(nomCategorie);
	}

	@GetMapping("/all")
	public List<Categorie> findAll() {
		return categorieService.findAll();
	}
	
	@GetMapping("/search")
	public Page<Categorie> getByKeyword(
			@RequestParam(name = "q", defaultValue = "") String keyword,
			@RequestParam(defaultValue = "0", name = "page") int page,
			@RequestParam(defaultValue = "12", name = "size") int size) {

		Pageable pageable = PageRequest.of(page, size);

		Page<Categorie> pageCategories = categorieService.selectCategories(keyword, pageable);

		return pageCategories;
	}
	
	@GetMapping("/latest")
	public List<Categorie> getLatest(){
		
		return categorieService.findLatest();
	}
	
	
	@GetMapping("/all-reverse")
	public Page<Categorie> getAllReverse(
			@RequestParam(defaultValue = "0", name = "page") int page,
			@RequestParam(defaultValue = "12", name = "size") int size) {

		Pageable pageable = PageRequest.of(page, size);

		Page<Categorie> pageCategories = categorieService.findAllReverse(pageable);

		return pageCategories;
	}

}
