package io.github.jhipster.sample.repository;

import io.github.jhipster.sample.domain.FieldTestMapstructEntity;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the FieldTestMapstructEntity entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FieldTestMapstructEntityRepository extends JpaRepository<FieldTestMapstructEntity, Long> {

}
