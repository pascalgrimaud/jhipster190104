package io.github.jhipster.sample.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import io.github.jhipster.config.jcache.BeanClassLoaderAwareJCacheRegionFactory;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        BeanClassLoaderAwareJCacheRegionFactory.setBeanClassLoader(this.getClass().getClassLoader());
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache(io.github.jhipster.sample.repository.UserRepository.USERS_BY_LOGIN_CACHE, jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.repository.UserRepository.USERS_BY_EMAIL_CACHE, jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.Authority.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.BankAccount.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.BankAccount.class.getName() + ".operations", jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.Label.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.Label.class.getName() + ".operations", jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.Operation.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.Operation.class.getName() + ".labels", jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.FieldTestEntity.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.FieldTestPagerEntity.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.FieldTestMapstructEntity.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.FieldTestServiceImplEntity.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.FieldTestInfiniteScrollEntity.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.FieldTestServiceClassEntity.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.FieldTestPaginationEntity.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.EntityWithDTO.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.EntityWithServiceClass.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.EntityWithServiceImpl.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.EntityWithPagination.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.EntityWithServiceClassAndPagination.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.EntityWithServiceImplAndPagination.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.EntityWithServiceClassAndDTO.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.EntityWithServiceImplAndDTO.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.EntityWithPaginationAndDTO.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.EntityWithServiceClassPaginationAndDTO.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.sample.domain.EntityWithServiceImplPaginationAndDTO.class.getName(), jcacheConfiguration);
            // jhipster-needle-ehcache-add-entry
        };
    }
}
