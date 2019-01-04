package io.github.jhipster.sample.repository;

import io.github.jhipster.sample.domain.EntityWithServiceImplAndPagination;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EntityWithServiceImplAndPagination entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntityWithServiceImplAndPaginationRepository extends JpaRepository<EntityWithServiceImplAndPagination, Long> {

}
