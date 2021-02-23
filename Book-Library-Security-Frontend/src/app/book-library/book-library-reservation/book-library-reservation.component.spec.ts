import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLibraryReservationComponent } from './book-library-reservation.component';

describe('BookLibraryReservationComponent', () => {
  let component: BookLibraryReservationComponent;
  let fixture: ComponentFixture<BookLibraryReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLibraryReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLibraryReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
