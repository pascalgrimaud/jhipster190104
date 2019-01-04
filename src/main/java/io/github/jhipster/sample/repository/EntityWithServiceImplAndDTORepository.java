package io.github.jhipster.sample.repository;

import io.github.jhipster.sample.domain.EntityWithServiceImplAndDTO;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EntityWithServiceImplAndDTO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntityWithServiceImplAndDTORepository extends JpaRepository<EntityWithServiceImplAndDTO, Long> {

}
