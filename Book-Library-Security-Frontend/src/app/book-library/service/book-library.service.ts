import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SettingService} from '../../settings/setting.service';
import {Observable} from 'rxjs';
import {Books} from '../model/books';
import {Reservation} from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class BookLibraryService {

  constructor(private http: HttpClient,
              private configUrl: SettingService) {
  }

  /*GET ID METHODS*/

  getBookId(id: number): Observable<any> {
    return this.http.get(this.configUrl.BOOK_URL + '/{id}?id=' + id);
  }

  getReservationId(id: number): Observable<any> {
    return this.http.get(this.configUrl.RESERVATION_URL + '/reservation-one/{id}?id=' + id);
  }

  /*GET METHODS*/

  getBookList(): Observable<any> {
    return this.http.get(`${this.configUrl.BOOK_URL}`);
  }

  getReservationList(): Observable<any> {
    return this.http.get(`${this.configUrl.RESERVATION_URL + '/all'}`);
  }

  getBooks() {
    return this.http.get<Books[]>('http://localhost:8080/books');
  }

  getTypeList(): Observable<any> {
    return this.http.get(`${this.configUrl.TYPE_URL}`);
  }

  getRatingList(): Observable<any> {
    return this.http.get(`${this.configUrl.RATING_URL}`);
  }

  /*GET TO RELATION*/

  getBookListRelation() {
    return this.http
      .get(this.configUrl.BOOK_URL)
      .toPromise();
  }

  getBookRating() {
    return this.http
      .get(this.configUrl.RATING_URL)
      .toPromise();
  }

  getBookType() {
    return this.http
      .get(this.configUrl.TYPE_URL)
      .toPromise();
  }

  /*CREATE METHODS*/

  createBook(book: Object): Observable<Object> {
    return this.http.post(`${this.configUrl.BOOK_URL}`, book);
  }

  createBookRating(rating: Object): Observable<Object> {
    return this.http.post(`${this.configUrl.RATING_URL}`, rating);
  }

  createBookType(type: Object): Observable<Object> {
    return this.http.post(`${this.configUrl.TYPE_URL}`, type);
  }

  test(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>('http://localhost:8080/reservation', reservation);
  }

  /*GET METHODS*/

  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.configUrl.BOOK_URL + '/{id}?id=' + id, {responseType: 'text'});
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(this.configUrl.RESERVATION_URL + '/{id}?id=' + id, {responseType: 'text'});
  }

  deleteRating(id: number): Observable<any> {
    return this.http.delete(this.configUrl.RATING_URL + '/{id}?id=' + id, {responseType: 'text'});
  }

  deleteType(id: number): Observable<any> {
    return this.http.delete(this.configUrl.TYPE_URL + '/{id}?id=' + id, {responseType: 'text'});
  }

  /*EDIT METHODS*/
  edit(book: Books, id): Promise<any> {
    return this.http
      .put(this.configUrl.BOOK_URL + '?id=' + id, book)
      .toPromise();
  }
}
