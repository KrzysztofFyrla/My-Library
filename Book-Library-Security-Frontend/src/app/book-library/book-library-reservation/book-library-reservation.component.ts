import {Component, OnInit} from '@angular/core';
import {Books} from '../model/books';
import {BookLibraryService} from '../service/book-library.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Reservation} from '../model/reservation';

@Component({
  selector: 'app-book-library-reservation',
  templateUrl: './book-library-reservation.component.html',
  styleUrls: ['./book-library-reservation.component.scss']
})
export class BookLibraryReservationComponent implements OnInit {

  id: number;
  reservation: Reservation = new Reservation();

  book: Books = new Books();
  booksArray: Array<Books> = [];

  constructor(private bookService: BookLibraryService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.bookService.getBookId(this.id)
      .subscribe(data => {
        this.book = data;
      }, error => console.log(error));

    this.bookService.getBookListRelation().then(successResponse => {
      // @ts-ignore
      this.booksArray = successResponse;
    });
  }

  public createReservation(): void {

    const myDate = new Date();

    const r: Reservation = ({
      id: 1,
      reservationDate: myDate,
      books: this.book,
    });

    this.bookService.test(r).subscribe(data => {
      console.log('');
    });
    this.reservation = new Reservation();
  }
}
