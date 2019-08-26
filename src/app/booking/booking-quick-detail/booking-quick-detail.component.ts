import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booking-quick-detail',
  templateUrl: './booking-quick-detail.component.html'
})
export class BookingQuickDetailComponent implements OnInit {
  @Input() booking: any;

  constructor() { }

  ngOnInit() {
  }

}
