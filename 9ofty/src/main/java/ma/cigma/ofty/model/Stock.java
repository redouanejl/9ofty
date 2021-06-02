package ma.cigma.ofty.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Stock implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private float quantite;
	
	@ManyToOne
	@JoinColumn(name = "livreur_id")
	private Livreur livreur;
	
	@ManyToOne
	@JoinColumn(name = "produit_id")
	private Produit produit;

}
