package io.github.jhipster.sample.web.rest;

import io.github.jhipster.sample.domain.EntityWithServiceImpl;
import io.github.jhipster.sample.service.EntityWithServiceImplService;
import io.github.jhipster.sample.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.sample.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing EntityWithServiceImpl.
 */
@RestController
@RequestMapping("/api")
public class EntityWithServiceImplResource {

    private final Logger log = LoggerFactory.getLogger(EntityWithServiceImplResource.class);

    private static final String ENTITY_NAME = "entityWithServiceImpl";

    private final EntityWithServiceImplService entityWithServiceImplService;

    public EntityWithServiceImplResource(EntityWithServiceImplService entityWithServiceImplService) {
        this.entityWithServiceImplService = entityWithServiceImplService;
    }

    /**
     * POST  /entity-with-service-impls : Create a new entityWithServiceImpl.
     *
     * @param entityWithServiceImpl the entityWithServiceImpl to create
     * @return the ResponseEntity with status 201 (Created) and with body the new entityWithServiceImpl, or with status 400 (Bad Request) if the entityWithServiceImpl has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/entity-with-service-impls")
    public ResponseEntity<EntityWithServiceImpl> createEntityWithServiceImpl(@RequestBody EntityWithServiceImpl entityWithServiceImpl) throws URISyntaxException {
        log.debug("REST request to save EntityWithServiceImpl : {}", entityWithServiceImpl);
        if (entityWithServiceImpl.getId() != null) {
            throw new BadRequestAlertException("A new entityWithServiceImpl cannot already have an ID", ENTITY_NAME, "idexists");
        }
        EntityWithServiceImpl result = entityWithServiceImplService.save(entityWithServiceImpl);
        return ResponseEntity.created(new URI("/api/entity-with-service-impls/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /entity-with-service-impls : Updates an existing entityWithServiceImpl.
     *
     * @param entityWithServiceImpl the entityWithServiceImpl to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated entityWithServiceImpl,
     * or with status 400 (Bad Request) if the entityWithServiceImpl is not valid,
     * or with status 500 (Internal Server Error) if the entityWithServiceImpl couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/entity-with-service-impls")
    public ResponseEntity<EntityWithServiceImpl> updateEntityWithServiceImpl(@RequestBody EntityWithServiceImpl entityWithServiceImpl) throws URISyntaxException {
        log.debug("REST request to update EntityWithServiceImpl : {}", entityWithServiceImpl);
        if (entityWithServiceImpl.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        EntityWithServiceImpl result = entityWithServiceImplService.save(entityWithServiceImpl);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, entityWithServiceImpl.getId().toString()))
            .body(result);
    }

    /**
     * GET  /entity-with-service-impls : get all the entityWithServiceImpls.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of entityWithServiceImpls in body
     */
    @GetMapping("/entity-with-service-impls")
    public List<EntityWithServiceImpl> getAllEntityWithServiceImpls() {
        log.debug("REST request to get all EntityWithServiceImpls");
        return entityWithServiceImplService.findAll();
    }

    /**
     * GET  /entity-with-service-impls/:id : get the "id" entityWithServiceImpl.
     *
     * @param id the id of the entityWithServiceImpl to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the entityWithServiceImpl, or with status 404 (Not Found)
     */
    @GetMapping("/entity-with-service-impls/{id}")
    public ResponseEntity<EntityWithServiceImpl> getEntityWithServiceImpl(@PathVariable Long id) {
        log.debug("REST request to get EntityWithServiceImpl : {}", id);
        Optional<EntityWithServiceImpl> entityWithServiceImpl = entityWithServiceImplService.findOne(id);
        return ResponseUtil.wrapOrNotFound(entityWithServiceImpl);
    }

    /**
     * DELETE  /entity-with-service-impls/:id : delete the "id" entityWithServiceImpl.
     *
     * @param id the id of the entityWithServiceImpl to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/entity-with-service-impls/{id}")
    public ResponseEntity<Void> deleteEntityWithServiceImpl(@PathVariable Long id) {
        log.debug("REST request to delete EntityWithServiceImpl : {}", id);
        entityWithServiceImplService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
