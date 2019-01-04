package io.github.jhipster.sample.repository;

import io.github.jhipster.sample.domain.EntityWithServiceClassPaginationAndDTO;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EntityWithServiceClassPaginationAndDTO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntityWithServiceClassPaginationAndDTORepository extends JpaRepository<EntityWithServiceClassPaginationAndDTO, Long> {

}
