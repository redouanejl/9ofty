package ma.cigma.ofty.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@DiscriminatorValue("livreur")
@NoArgsConstructor
@Getter
@Setter
public class Livreur extends Utilisateur implements Serializable {

	private static final long serialVersionUID = 1L;

	private String matricule;

	private String lattitude;

	private String longitude;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "livreur")
	private List<Stock> listeStockes;

	@OneToMany(mappedBy = "livreur")
	private List<Commande> listeCommandes;

	public Livreur(long id, String TitreSocial, String nom, String prenom, String username, String email,
			String motDePasse, Date dateNaissance, String statut, Date dateEnregistrement, Set<Role> roles,
			String matricule, String lattitude, String longitude, List<Stock> listeStockes,
			List<Commande> listeCommandes) {
		super(id, TitreSocial, nom, prenom, username, email, motDePasse, dateNaissance, statut, dateEnregistrement,
				roles);
		this.matricule = matricule;
		this.lattitude = lattitude;
		this.longitude = longitude;
		this.listeStockes = listeStockes;
		this.listeCommandes = listeCommandes;
	}

	

}
