package io.github.jhipster.sample.web.rest;

import io.github.jhipster.sample.domain.EntityWithServiceClassAndPagination;
import io.github.jhipster.sample.service.EntityWithServiceClassAndPaginationService;
import io.github.jhipster.sample.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.sample.web.rest.util.HeaderUtil;
import io.github.jhipster.sample.web.rest.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing EntityWithServiceClassAndPagination.
 */
@RestController
@RequestMapping("/api")
public class EntityWithServiceClassAndPaginationResource {

    private final Logger log = LoggerFactory.getLogger(EntityWithServiceClassAndPaginationResource.class);

    private static final String ENTITY_NAME = "entityWithServiceClassAndPagination";

    private final EntityWithServiceClassAndPaginationService entityWithServiceClassAndPaginationService;

    public EntityWithServiceClassAndPaginationResource(EntityWithServiceClassAndPaginationService entityWithServiceClassAndPaginationService) {
        this.entityWithServiceClassAndPaginationService = entityWithServiceClassAndPaginationService;
    }

    /**
     * POST  /entity-with-service-class-and-paginations : Create a new entityWithServiceClassAndPagination.
     *
     * @param entityWithServiceClassAndPagination the entityWithServiceClassAndPagination to create
     * @return the ResponseEntity with status 201 (Created) and with body the new entityWithServiceClassAndPagination, or with status 400 (Bad Request) if the entityWithServiceClassAndPagination has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/entity-with-service-class-and-paginations")
    public ResponseEntity<EntityWithServiceClassAndPagination> createEntityWithServiceClassAndPagination(@RequestBody EntityWithServiceClassAndPagination entityWithServiceClassAndPagination) throws URISyntaxException {
        log.debug("REST request to save EntityWithServiceClassAndPagination : {}", entityWithServiceClassAndPagination);
        if (entityWithServiceClassAndPagination.getId() != null) {
            throw new BadRequestAlertException("A new entityWithServiceClassAndPagination cannot already have an ID", ENTITY_NAME, "idexists");
        }
        EntityWithServiceClassAndPagination result = entityWithServiceClassAndPaginationService.save(entityWithServiceClassAndPagination);
        return ResponseEntity.created(new URI("/api/entity-with-service-class-and-paginations/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /entity-with-service-class-and-paginations : Updates an existing entityWithServiceClassAndPagination.
     *
     * @param entityWithServiceClassAndPagination the entityWithServiceClassAndPagination to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated entityWithServiceClassAndPagination,
     * or with status 400 (Bad Request) if the entityWithServiceClassAndPagination is not valid,
     * or with status 500 (Internal Server Error) if the entityWithServiceClassAndPagination couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/entity-with-service-class-and-paginations")
    public ResponseEntity<EntityWithServiceClassAndPagination> updateEntityWithServiceClassAndPagination(@RequestBody EntityWithServiceClassAndPagination entityWithServiceClassAndPagination) throws URISyntaxException {
        log.debug("REST request to update EntityWithServiceClassAndPagination : {}", entityWithServiceClassAndPagination);
        if (entityWithServiceClassAndPagination.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        EntityWithServiceClassAndPagination result = entityWithServiceClassAndPaginationService.save(entityWithServiceClassAndPagination);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, entityWithServiceClassAndPagination.getId().toString()))
            .body(result);
    }

    /**
     * GET  /entity-with-service-class-and-paginations : get all the entityWithServiceClassAndPaginations.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of entityWithServiceClassAndPaginations in body
     */
    @GetMapping("/entity-with-service-class-and-paginations")
    public ResponseEntity<List<EntityWithServiceClassAndPagination>> getAllEntityWithServiceClassAndPaginations(Pageable pageable) {
        log.debug("REST request to get a page of EntityWithServiceClassAndPaginations");
        Page<EntityWithServiceClassAndPagination> page = entityWithServiceClassAndPaginationService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/entity-with-service-class-and-paginations");
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * GET  /entity-with-service-class-and-paginations/:id : get the "id" entityWithServiceClassAndPagination.
     *
     * @param id the id of the entityWithServiceClassAndPagination to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the entityWithServiceClassAndPagination, or with status 404 (Not Found)
     */
    @GetMapping("/entity-with-service-class-and-paginations/{id}")
    public ResponseEntity<EntityWithServiceClassAndPagination> getEntityWithServiceClassAndPagination(@PathVariable Long id) {
        log.debug("REST request to get EntityWithServiceClassAndPagination : {}", id);
        Optional<EntityWithServiceClassAndPagination> entityWithServiceClassAndPagination = entityWithServiceClassAndPaginationService.findOne(id);
        return ResponseUtil.wrapOrNotFound(entityWithServiceClassAndPagination);
    }

    /**
     * DELETE  /entity-with-service-class-and-paginations/:id : delete the "id" entityWithServiceClassAndPagination.
     *
     * @param id the id of the entityWithServiceClassAndPagination to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/entity-with-service-class-and-paginations/{id}")
    public ResponseEntity<Void> deleteEntityWithServiceClassAndPagination(@PathVariable Long id) {
        log.debug("REST request to delete EntityWithServiceClassAndPagination : {}", id);
        entityWithServiceClassAndPaginationService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
