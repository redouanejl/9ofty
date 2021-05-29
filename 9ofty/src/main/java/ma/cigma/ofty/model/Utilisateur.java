package ma.cigma.ofty.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type")
@AllArgsConstructor
@NoArgsConstructor
public class Utilisateur implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "titre_social")
	private String TitreSocial;
	
	private String nom;
	
	private String prenom;
	
	private String email;
	
	@Column(name = "mot_de_passe")
	private String motDePasse;
	
	@Column(name = "date_naissance")
	private Date dateNaissance;
	
	private String statut;
	
	@CreationTimestamp
	private Date dateEnregistrement;
	
//	@ManyToOne
//	@JoinColumn(name = "authorite_id")
//	private Authorite authorite;

}
