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

import ma.cigma.ofty.model.Livreur;
import ma.cigma.ofty.service.LivreurService;

@RestController
@RequestMapping("/api/livreurs")
public class LivreurController {

	@Autowired
	LivreurService service;
	
	@PostMapping("/add")
	public Livreur create(@RequestBody Livreur l) {
		return service.insert(l);
	}
	
	@PutMapping("/update")
	public Livreur update(@RequestBody Livreur l) {
		return service.update(l);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") Long id) {
		service.delete(id);
	}
	
	@GetMapping("/all")
	public List<Livreur> getAll(){
		return service.findAll();
	}
	
	@GetMapping("/{id}")
	public Livreur getOne(@PathVariable("id") Long id) {
		return service.getLivreur(id);
	}
	
	@GetMapping("/latest")
	public List<Livreur> findLatest() {
		
		return service.findLatest();
	}
	
	@GetMapping("/all-reverse")
	public Page<Livreur> findAllReverse(
			@RequestParam(defaultValue = "0", name = "page") int page,
			@RequestParam(defaultValue = "12", name = "size") int size) {

		Pageable pageable = PageRequest.of(page, size);

		Page<Livreur> pageLivreurs = service.findAllReverse(pageable);

		return pageLivreurs;
	}
}
