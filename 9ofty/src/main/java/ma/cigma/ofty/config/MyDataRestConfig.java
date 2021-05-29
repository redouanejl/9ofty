package ma.cigma.ofty.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer{

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		exposeIds(config);
	}

	private void exposeIds(RepositoryRestConfiguration config) {
		Set<EntityType<?>> entitites = entityManager.getMetamodel().getEntities();
		
		List<Class> entityClasses = new ArrayList<Class>();
		
		for (EntityType entityType : entitites) {
			entityClasses.add(entityType.getJavaType());
		}
		
		Class[] domainTypes = entityClasses.toArray(new Class[0]);
		
		config.exposeIdsFor(domainTypes);
	}
}
