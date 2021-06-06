package ma.cigma.ofty.model;

import java.io.Serializable;

import javax.persistence.Column;
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

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String nom;
	
	@Column(columnDefinition = "varchar(255) default 'https://blackmantkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg'")
	private String image;
	
	private float prix;
	
	private String contenance;
	
	private String statut;
	
	@ManyToOne
	@JoinColumn(name = "categorie_id")
	private Categorie categorie;
}
