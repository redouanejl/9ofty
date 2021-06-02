package ma.cigma.ofty.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@DiscriminatorValue("admin")
@NoArgsConstructor
@Getter
@Setter
public class Admin extends Utilisateur implements Serializable{
	
	private static final long serialVersionUID = 1L;

	public Admin(long id, String TitreSocial, String nom, String prenom, String username, String email,
			String motDePasse, Date dateNaissance, String statut, Date dateEnregistrement, Set<Role> roles) {
		super(id, TitreSocial, nom, prenom, username, email, motDePasse, dateNaissance, statut, dateEnregistrement, roles);
		
	}

	

}
