package ma.cigma.ofty.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import ma.cigma.ofty.dao.UtilisateurRepository;
import ma.cigma.ofty.model.Utilisateur;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	UtilisateurRepository utilisateurRepository;

	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Utilisateur utilisateur = utilisateurRepository.findByUsername(username).orElseThrow(()-> new UsernameNotFoundException("Utilisateur avec username "+username+" n'existe pas"));
		
		return UserDetailsImpl.build(utilisateur);
	}
	
	
}
