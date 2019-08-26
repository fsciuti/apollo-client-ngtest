import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking-quick-form',
  templateUrl: './booking-quick-form.component.html'
})
export class BookingQuickFormComponent implements OnInit {
  @Input() customers: any[] = [];
  @Input() properties: any[] = [];
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submit(f: NgForm ) {
    this.submitted.emit(f.value);
  }
}
