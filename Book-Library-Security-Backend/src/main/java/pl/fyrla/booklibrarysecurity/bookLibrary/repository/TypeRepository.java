package pl.fyrla.booklibrarysecurity.bookLibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.fyrla.booklibrarysecurity.bookLibrary.model.Type;

/**
 * @author Krzysztof
 * @project book-library-backend
 */
@Repository
public interface TypeRepository extends JpaRepository<Type, Integer> {
}
