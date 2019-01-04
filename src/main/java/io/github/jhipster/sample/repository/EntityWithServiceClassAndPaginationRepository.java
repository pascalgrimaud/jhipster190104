package io.github.jhipster.sample.repository;

import io.github.jhipster.sample.domain.EntityWithServiceClassAndPagination;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EntityWithServiceClassAndPagination entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntityWithServiceClassAndPaginationRepository extends JpaRepository<EntityWithServiceClassAndPagination, Long> {

}
