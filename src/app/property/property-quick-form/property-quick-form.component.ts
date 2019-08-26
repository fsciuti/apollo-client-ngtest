import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-property-quick-form',
  templateUrl: './property-quick-form.component.html'
})
export class PropertyQuickFormComponent implements OnInit {
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submit(f: NgForm ) {
    this.submitted.emit(f.value);
  }
}
