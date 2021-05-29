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

import ma.cigma.ofty.model.Client;
import ma.cigma.ofty.service.ClientService;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

	@Autowired
	ClientService clientService;

	@PostMapping("/add")
	public Client create(@RequestBody Client c) {
		return clientService.insert(c);
	}

	@PutMapping("/update")
	public Client update(@RequestBody Client c) {
		return clientService.update(c);
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") Long id) {
		clientService.delete(id);
	}

	@GetMapping("/all")
	public List<Client> getAll() {
		return clientService.findAll();
	}

	@GetMapping("/{id}")
	public Client getOne(@PathVariable("id") Long id) {
		return clientService.findOne(id);
	}

	@GetMapping("/latest")
	public List<Client> findLatest() {
		
		return clientService.findLatest();
	}

	@GetMapping("/all-reverse")
	public Page<Client> findAllReverse(@RequestParam(defaultValue = "0", name = "page") int page,
			@RequestParam(defaultValue = "12", name = "size") int size) {

		Pageable pageable = PageRequest.of(page, size);

		Page<Client> pageClients = clientService.findAllReverse(pageable);

		return pageClients;
	}

}
