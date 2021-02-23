import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Reservation} from '../model/reservation';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {BookLibraryService} from '../service/book-library.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-reservation-list',
  templateUrl: './book-reservation-list.component.html',
  styleUrls: ['./book-reservation-list.component.scss']
})
export class BookReservationListComponent implements OnInit {

  reservation: Reservation[];

  displayedColumns: string[] = ['id', 'book', 'reservationDate', 'delete'];

  // @ts-ignore
  dataSource = new MatTableDataSource<Reservation>(this.reservation);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private bookService: BookLibraryService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.bookService.getReservationList().subscribe(data => {
        this.reservation = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      result => {
        this.refresh();
      });
  }

  private refresh(): void {
    this.bookService.getReservationList().subscribe(data => {
      this.reservation = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  deleteReservation(id: any): void {
    this.bookService.deleteReservation(id).subscribe(data => {
      console.log(data);
      this.refresh();
    });
    this.snackBar.open('Rezerwacja została usunięta', '', {duration: 2000});
  }
}
