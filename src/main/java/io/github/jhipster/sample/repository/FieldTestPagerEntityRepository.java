package io.github.jhipster.sample.repository;

import io.github.jhipster.sample.domain.FieldTestPagerEntity;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the FieldTestPagerEntity entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FieldTestPagerEntityRepository extends JpaRepository<FieldTestPagerEntity, Long> {

}
