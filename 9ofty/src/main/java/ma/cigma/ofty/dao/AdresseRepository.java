package ma.cigma.ofty.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.cigma.ofty.model.Adresse;

@Repository
public interface AdresseRepository extends JpaRepository<Adresse, Long> {

}
