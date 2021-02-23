package pl.fyrla.booklibrarysecurity.bookLibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.fyrla.booklibrarysecurity.bookLibrary.model.Books;
import pl.fyrla.booklibrarysecurity.bookLibrary.model.Reservation;

import java.util.List;

/**
 * @author Krzysztof
 * @project book-library-security
 */
@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByBooks(Books books);
}
