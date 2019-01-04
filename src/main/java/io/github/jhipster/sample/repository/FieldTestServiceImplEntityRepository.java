package io.github.jhipster.sample.repository;

import io.github.jhipster.sample.domain.FieldTestServiceImplEntity;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the FieldTestServiceImplEntity entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FieldTestServiceImplEntityRepository extends JpaRepository<FieldTestServiceImplEntity, Long> {

}
