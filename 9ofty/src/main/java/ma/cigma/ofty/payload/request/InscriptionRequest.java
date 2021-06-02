package ma.cigma.ofty.payload.request;

import java.util.Set;

import lombok.Getter;
import lombok.Setter;
import ma.cigma.ofty.model.Role;

@Getter
@Setter
public class InscriptionRequest {
	
	private String titreSocial;
	
	private String nom;
	
	private String prenom;

	private String username;
	
	private String email;
	
	private Set<Role> roles;
	
	private String password;
}
