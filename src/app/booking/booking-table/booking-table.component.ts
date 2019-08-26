import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html'
})
export class BookingTableComponent implements OnInit {
  bookingFields = ['#', 'Proprietà', 'Tipologia', 'Cliente', 'Data Inizio', 'Data Fine', ''];
  @Input() bookings: any[] = [];
  @Output() selectedBooking: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectBooking(booking) {
    this.selectedBooking.emit(booking);
  }
}
