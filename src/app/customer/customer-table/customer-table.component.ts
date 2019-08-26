import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html'
})
export class CustomerTableComponent implements OnInit {
  customerFields = ['#', 'Cliente', 'Email', 'Prenotazioni'];
  @Input() customers: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
