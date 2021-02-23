import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReservationListComponent } from './book-reservation-list.component';

describe('BookReservationListComponent', () => {
  let component: BookReservationListComponent;
  let fixture: ComponentFixture<BookReservationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookReservationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReservationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
