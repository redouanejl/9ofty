package ma.cigma.ofty.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.cigma.ofty.dao.RoleRepository;
import ma.cigma.ofty.dao.UtilisateurRepository;
import ma.cigma.ofty.model.Client;
import ma.cigma.ofty.model.ERole;
import ma.cigma.ofty.model.Role;
import ma.cigma.ofty.payload.request.ConnexionRequest;
import ma.cigma.ofty.payload.request.InscriptionRequest;
import ma.cigma.ofty.payload.response.JwtResponse;
import ma.cigma.ofty.payload.response.MessageResponse;
import ma.cigma.ofty.security.jwt.JwtUtils;
import ma.cigma.ofty.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	UtilisateurRepository utilisateurRepository;
	
	@Autowired
	RoleRepository roleRepository;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	JwtUtils jwtUtils;
	
	@PostMapping("/connexion")
	public ResponseEntity<?> authenticateUser(@RequestBody ConnexionRequest connexionRequest){
		
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(connexionRequest.getUsername(), connexionRequest.getPassword()));
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt= jwtUtils.generateJwtToken(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		
		List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority()).collect(Collectors.toList());
		
		return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles));
		
	}
	
	@PostMapping("/inscription")
	public ResponseEntity<?> registerUser(@RequestBody InscriptionRequest inscriptionRequest){
		
		if(utilisateurRepository.existsByUsername(inscriptionRequest.getUsername())) {
			
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username est deja utilise!"));
		}
		
		if(utilisateurRepository.existsByEmail(inscriptionRequest.getEmail())) {
			
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Email est deja utilise!"));
		}
		
		Client client = new Client();
		
		//set client attributs
		client.setTitreSocial(inscriptionRequest.getTitreSocial());
		client.setNom(inscriptionRequest.getNom());
		client.setPrenom(inscriptionRequest.getPrenom());
		client.setUsername(inscriptionRequest.getUsername());
		client.setEmail(inscriptionRequest.getEmail());
		client.setMotDePasse(encoder.encode(inscriptionRequest.getPassword()));
		client.setStatut("active");
		
		Role clientRole = roleRepository.findByNom(ERole.ROLE_CLIENT).orElseThrow(() -> new RuntimeException("Error: Role n'existe pas!"));
		Set<Role> roles = new HashSet<Role>();
		roles.add(clientRole);
		
		client.setRoles(roles);
		
		//save client
		utilisateurRepository.save(client);
		
		
		
		return ResponseEntity.ok(new MessageResponse("Utilisateur enregistre avec succes!"));
	}
	
}






