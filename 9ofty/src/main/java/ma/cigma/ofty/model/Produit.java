package ma.cigma.ofty.model;

import java.io.Serializable;
import java.util.List;

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
public class Produit implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String nom;
	
	private String image;
	
	private float prix;
	
	private String contenance;
	
	private String statut;
	
	@ManyToOne
	@JoinColumn(name = "categorie_id")
	private Categorie categorie;
}
