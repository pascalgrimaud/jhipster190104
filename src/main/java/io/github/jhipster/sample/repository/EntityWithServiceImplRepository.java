package io.github.jhipster.sample.repository;

import io.github.jhipster.sample.domain.EntityWithServiceImpl;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EntityWithServiceImpl entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntityWithServiceImplRepository extends JpaRepository<EntityWithServiceImpl, Long> {

}
