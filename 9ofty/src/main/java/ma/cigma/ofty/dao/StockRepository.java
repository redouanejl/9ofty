package ma.cigma.ofty.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.cigma.ofty.model.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Long> {

}
