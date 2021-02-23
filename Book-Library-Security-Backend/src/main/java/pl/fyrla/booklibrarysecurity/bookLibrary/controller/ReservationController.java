package pl.fyrla.booklibrarysecurity.bookLibrary.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.fyrla.booklibrarysecurity.bookLibrary.model.Reservation;
import pl.fyrla.booklibrarysecurity.bookLibrary.service.ReservationService;

import java.util.List;
import java.util.Optional;

/**
 * @author Krzysztof
 * @project book-library-security
 */
@CrossOrigin(origins = "*")
@RestController
@AllArgsConstructor
public class ReservationController {

    private final ReservationService reservationService;

    @GetMapping("/reservation/{bookId}")
    public ResponseEntity<List<Reservation>> getAllReservationForBook(@PathVariable Long bookId) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(reservationService.getAllReservationFromBook(bookId));
    }

    @GetMapping("/reservation/reservation-one/{id}")
    public Optional<Reservation> getReservationById(@RequestParam Long id) {
        return reservationService.getReservationById(id);
    }

    @PostMapping("/reservation")
    public Reservation addReservation(@RequestBody Reservation reservation) {
        return reservationService.addNewReservation(reservation);
    }

    @DeleteMapping("/reservation/{id}")
    public void deleteReservation(@RequestParam Long id) {
        reservationService.deleteReservationById(id);
    }
}
