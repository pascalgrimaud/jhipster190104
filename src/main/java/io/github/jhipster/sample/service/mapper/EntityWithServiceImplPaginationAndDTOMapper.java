package io.github.jhipster.sample.service.mapper;

import io.github.jhipster.sample.domain.*;
import io.github.jhipster.sample.service.dto.EntityWithServiceImplPaginationAndDTODTO;

import org.mapstruct.*;

/**
 * Mapper for the entity EntityWithServiceImplPaginationAndDTO and its DTO EntityWithServiceImplPaginationAndDTODTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface EntityWithServiceImplPaginationAndDTOMapper extends EntityMapper<EntityWithServiceImplPaginationAndDTODTO, EntityWithServiceImplPaginationAndDTO> {



    default EntityWithServiceImplPaginationAndDTO fromId(Long id) {
        if (id == null) {
            return null;
        }
        EntityWithServiceImplPaginationAndDTO entityWithServiceImplPaginationAndDTO = new EntityWithServiceImplPaginationAndDTO();
        entityWithServiceImplPaginationAndDTO.setId(id);
        return entityWithServiceImplPaginationAndDTO;
    }
}
