import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-booking-container',
  templateUrl: './booking-container.component.html'
})
export class BookingContainerComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {}

  setActiveBooking(booking) {}

  addBooking(bookingInput) {}

  addCustomer(customerInput) {}

  addProperty(propertyInput) {}

  moreRecords() {}

  ngOnDestroy() {}
}
