package pl.fyrla.booklibrarysecurity.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.fyrla.booklibrarysecurity.security.model.ERole;
import pl.fyrla.booklibrarysecurity.security.model.Role;

import java.util.Optional;

/**
 * @author Krzysztof
 * @project home-system-api
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(ERole name);
}
