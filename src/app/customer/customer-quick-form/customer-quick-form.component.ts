import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-quick-form',
  templateUrl: './customer-quick-form.component.html'
})
export class CustomerQuickFormComponent implements OnInit {
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submit(f: NgForm ) {
    this.submitted.emit(f.value);
  }
}
