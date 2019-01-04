package io.github.jhipster.sample.repository;

import io.github.jhipster.sample.domain.EntityWithServiceImplPaginationAndDTO;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EntityWithServiceImplPaginationAndDTO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntityWithServiceImplPaginationAndDTORepository extends JpaRepository<EntityWithServiceImplPaginationAndDTO, Long> {

}
