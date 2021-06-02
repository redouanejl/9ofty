package ma.cigma.ofty.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@DiscriminatorValue("client")
@NoArgsConstructor
@Getter
@Setter
public class Client extends Utilisateur implements Serializable {

	private static final long serialVersionUID = 1L;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "billing_address_id")
	private Adresse billingAdresse;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "shipping_address_id")
	private Adresse shippingAdresse;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "client")
	private List<Commande> listeCommandes;

	public Client(long id, String TitreSocial, String nom, String prenom, String username, String email,
			String motDePasse, Date dateNaissance, String statut, Date dateEnregistrement, Set<Role> roles,
			Adresse billingAdresse, Adresse shippingAdresse, List<Commande> listeCommandes) {
		super(id, TitreSocial, nom, prenom, username, email, motDePasse, dateNaissance, statut, dateEnregistrement,
				roles);
		this.billingAdresse = billingAdresse;
		this.shippingAdresse = shippingAdresse;
		this.listeCommandes = listeCommandes;
	}

	

}
