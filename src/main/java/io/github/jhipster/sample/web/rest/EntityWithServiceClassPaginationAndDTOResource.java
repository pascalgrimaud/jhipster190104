package io.github.jhipster.sample.web.rest;

import io.github.jhipster.sample.service.EntityWithServiceClassPaginationAndDTOService;
import io.github.jhipster.sample.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.sample.web.rest.util.HeaderUtil;
import io.github.jhipster.sample.web.rest.util.PaginationUtil;
import io.github.jhipster.sample.service.dto.EntityWithServiceClassPaginationAndDTODTO;
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
 * REST controller for managing EntityWithServiceClassPaginationAndDTO.
 */
@RestController
@RequestMapping("/api")
public class EntityWithServiceClassPaginationAndDTOResource {

    private final Logger log = LoggerFactory.getLogger(EntityWithServiceClassPaginationAndDTOResource.class);

    private static final String ENTITY_NAME = "entityWithServiceClassPaginationAndDTO";

    private final EntityWithServiceClassPaginationAndDTOService entityWithServiceClassPaginationAndDTOService;

    public EntityWithServiceClassPaginationAndDTOResource(EntityWithServiceClassPaginationAndDTOService entityWithServiceClassPaginationAndDTOService) {
        this.entityWithServiceClassPaginationAndDTOService = entityWithServiceClassPaginationAndDTOService;
    }

    /**
     * POST  /entity-with-service-class-pagination-and-dtos : Create a new entityWithServiceClassPaginationAndDTO.
     *
     * @param entityWithServiceClassPaginationAndDTODTO the entityWithServiceClassPaginationAndDTODTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new entityWithServiceClassPaginationAndDTODTO, or with status 400 (Bad Request) if the entityWithServiceClassPaginationAndDTO has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/entity-with-service-class-pagination-and-dtos")
    public ResponseEntity<EntityWithServiceClassPaginationAndDTODTO> createEntityWithServiceClassPaginationAndDTO(@RequestBody EntityWithServiceClassPaginationAndDTODTO entityWithServiceClassPaginationAndDTODTO) throws URISyntaxException {
        log.debug("REST request to save EntityWithServiceClassPaginationAndDTO : {}", entityWithServiceClassPaginationAndDTODTO);
        if (entityWithServiceClassPaginationAndDTODTO.getId() != null) {
            throw new BadRequestAlertException("A new entityWithServiceClassPaginationAndDTO cannot already have an ID", ENTITY_NAME, "idexists");
        }
        EntityWithServiceClassPaginationAndDTODTO result = entityWithServiceClassPaginationAndDTOService.save(entityWithServiceClassPaginationAndDTODTO);
        return ResponseEntity.created(new URI("/api/entity-with-service-class-pagination-and-dtos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /entity-with-service-class-pagination-and-dtos : Updates an existing entityWithServiceClassPaginationAndDTO.
     *
     * @param entityWithServiceClassPaginationAndDTODTO the entityWithServiceClassPaginationAndDTODTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated entityWithServiceClassPaginationAndDTODTO,
     * or with status 400 (Bad Request) if the entityWithServiceClassPaginationAndDTODTO is not valid,
     * or with status 500 (Internal Server Error) if the entityWithServiceClassPaginationAndDTODTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/entity-with-service-class-pagination-and-dtos")
    public ResponseEntity<EntityWithServiceClassPaginationAndDTODTO> updateEntityWithServiceClassPaginationAndDTO(@RequestBody EntityWithServiceClassPaginationAndDTODTO entityWithServiceClassPaginationAndDTODTO) throws URISyntaxException {
        log.debug("REST request to update EntityWithServiceClassPaginationAndDTO : {}", entityWithServiceClassPaginationAndDTODTO);
        if (entityWithServiceClassPaginationAndDTODTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        EntityWithServiceClassPaginationAndDTODTO result = entityWithServiceClassPaginationAndDTOService.save(entityWithServiceClassPaginationAndDTODTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, entityWithServiceClassPaginationAndDTODTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /entity-with-service-class-pagination-and-dtos : get all the entityWithServiceClassPaginationAndDTOS.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of entityWithServiceClassPaginationAndDTOS in body
     */
    @GetMapping("/entity-with-service-class-pagination-and-dtos")
    public ResponseEntity<List<EntityWithServiceClassPaginationAndDTODTO>> getAllEntityWithServiceClassPaginationAndDTOS(Pageable pageable) {
        log.debug("REST request to get a page of EntityWithServiceClassPaginationAndDTOS");
        Page<EntityWithServiceClassPaginationAndDTODTO> page = entityWithServiceClassPaginationAndDTOService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/entity-with-service-class-pagination-and-dtos");
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * GET  /entity-with-service-class-pagination-and-dtos/:id : get the "id" entityWithServiceClassPaginationAndDTO.
     *
     * @param id the id of the entityWithServiceClassPaginationAndDTODTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the entityWithServiceClassPaginationAndDTODTO, or with status 404 (Not Found)
     */
    @GetMapping("/entity-with-service-class-pagination-and-dtos/{id}")
    public ResponseEntity<EntityWithServiceClassPaginationAndDTODTO> getEntityWithServiceClassPaginationAndDTO(@PathVariable Long id) {
        log.debug("REST request to get EntityWithServiceClassPaginationAndDTO : {}", id);
        Optional<EntityWithServiceClassPaginationAndDTODTO> entityWithServiceClassPaginationAndDTODTO = entityWithServiceClassPaginationAndDTOService.findOne(id);
        return ResponseUtil.wrapOrNotFound(entityWithServiceClassPaginationAndDTODTO);
    }

    /**
     * DELETE  /entity-with-service-class-pagination-and-dtos/:id : delete the "id" entityWithServiceClassPaginationAndDTO.
     *
     * @param id the id of the entityWithServiceClassPaginationAndDTODTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/entity-with-service-class-pagination-and-dtos/{id}")
    public ResponseEntity<Void> deleteEntityWithServiceClassPaginationAndDTO(@PathVariable Long id) {
        log.debug("REST request to delete EntityWithServiceClassPaginationAndDTO : {}", id);
        entityWithServiceClassPaginationAndDTOService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
