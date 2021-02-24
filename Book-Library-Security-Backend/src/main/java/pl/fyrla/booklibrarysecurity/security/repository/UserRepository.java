package pl.fyrla.booklibrarysecurity.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.fyrla.booklibrarysecurity.security.model.User;

import java.util.Optional;

/**
 * @author Krzysztof
 * @project home-system-api
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}
