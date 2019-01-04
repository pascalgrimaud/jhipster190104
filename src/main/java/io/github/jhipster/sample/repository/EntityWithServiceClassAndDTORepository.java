package io.github.jhipster.sample.repository;

import io.github.jhipster.sample.domain.EntityWithServiceClassAndDTO;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EntityWithServiceClassAndDTO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntityWithServiceClassAndDTORepository extends JpaRepository<EntityWithServiceClassAndDTO, Long> {

}
