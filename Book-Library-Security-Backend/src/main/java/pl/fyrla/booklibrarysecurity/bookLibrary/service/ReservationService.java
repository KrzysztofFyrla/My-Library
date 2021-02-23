package pl.fyrla.booklibrarysecurity.bookLibrary.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.fyrla.booklibrarysecurity.bookLibrary.exception.BookNotFoundException;
import pl.fyrla.booklibrarysecurity.bookLibrary.model.Books;
import pl.fyrla.booklibrarysecurity.bookLibrary.model.Reservation;
import pl.fyrla.booklibrarysecurity.bookLibrary.repository.BooksRepository;
import pl.fyrla.booklibrarysecurity.bookLibrary.repository.ReservationRepository;

import java.util.List;
import java.util.Optional;

/**
 * @author Krzysztof
 * @project book-library-security
 */
@Service
@AllArgsConstructor
public class ReservationService {

    private final BooksRepository booksRepository;
    private final ReservationRepository reservationRepository;

    public List<Reservation> getAllReservationFromBook(Long bookId) {
        Books books = booksRepository.findById(bookId).orElseThrow(() ->
                new BookNotFoundException(bookId.toString()));
        return reservationRepository.findByBooks(books);
    }

    public Optional<Reservation> getReservationById(Long id) {
        return reservationRepository.findById(id);
    }

    public Reservation addNewReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public void deleteReservationById(Long id) {
        reservationRepository.deleteById(id);
    }
}
