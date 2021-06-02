package ma.cigma.ofty.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Commande implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Date date;
	
	private String ref;
	
	private String statut;
	
	@Column(name = "type_paiement")
	private String typePaiement;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "billing_adresse_id")
	private Adresse billingAdresse;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "shipping_adresse_id")
	private Adresse shippingAdresse;
	
	@ManyToOne
	@JoinColumn(name = "client_id")
	private Client client;
	
	@ManyToOne
	@JoinColumn(name = "livreur_id")
	@JsonIgnore
	private Livreur livreur;

}
