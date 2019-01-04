package io.github.jhipster.sample.repository;

import io.github.jhipster.sample.domain.FieldTestServiceClassEntity;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the FieldTestServiceClassEntity entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FieldTestServiceClassEntityRepository extends JpaRepository<FieldTestServiceClassEntity, Long>, JpaSpecificationExecutor<FieldTestServiceClassEntity> {

}
