package io.github.jhipster.sample.service.mapper;

import io.github.jhipster.sample.domain.*;
import io.github.jhipster.sample.service.dto.EntityWithPaginationAndDTODTO;

import org.mapstruct.*;

/**
 * Mapper for the entity EntityWithPaginationAndDTO and its DTO EntityWithPaginationAndDTODTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface EntityWithPaginationAndDTOMapper extends EntityMapper<EntityWithPaginationAndDTODTO, EntityWithPaginationAndDTO> {



    default EntityWithPaginationAndDTO fromId(Long id) {
        if (id == null) {
            return null;
        }
        EntityWithPaginationAndDTO entityWithPaginationAndDTO = new EntityWithPaginationAndDTO();
        entityWithPaginationAndDTO.setId(id);
        return entityWithPaginationAndDTO;
    }
}
