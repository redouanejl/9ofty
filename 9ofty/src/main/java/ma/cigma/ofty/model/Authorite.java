//package ma.cigma.ofty.model;
//
//import java.util.List;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.OneToMany;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//import lombok.Data;
//
//@Entity
//@Data
//public class Authorite {
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	private int id;
//	
//	private String authorite;
//	
//	@OneToMany(mappedBy = "authorite", cascade = {CascadeType.PERSIST,CascadeType.DETACH,CascadeType.MERGE,CascadeType.REFRESH})
//	@JsonIgnore
//	private List<Utilisateur> listeUtilisateurs;
//}
