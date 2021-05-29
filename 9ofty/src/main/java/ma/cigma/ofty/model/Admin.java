package ma.cigma.ofty.model;

import java.io.Serializable;
import java.util.Date;

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

	public Admin(long id, String TitreSocial, String nom, String prenom, String email, String motDePasse,
			Date dateNaissance, String statut, Date dateEnregistrement) {
		super(id, TitreSocial, nom, prenom, email, motDePasse, dateNaissance, statut, dateEnregistrement);

	}

}
