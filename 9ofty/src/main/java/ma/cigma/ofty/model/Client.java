package ma.cigma.ofty.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

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

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "billing_address_id")
	private Adresse billingAdresse;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "shipping_address_id")
	private Adresse shippingAdresse;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "client")
	private List<Commande> listeCommandes;

	public Client(long id, String TitreSocial, String nom, String prenom, String email, String motDePasse,
			Date dateNaissance, String statut, Date dateEnregistrement, Adresse billingAdresse, Adresse shippingAdresse,
			List<Commande> listeCommandes) {
		super(id, TitreSocial, nom, prenom, email, motDePasse, dateNaissance, statut, dateEnregistrement);
		this.billingAdresse = billingAdresse;
		this.shippingAdresse = shippingAdresse;
		this.listeCommandes = listeCommandes;
	}

}
