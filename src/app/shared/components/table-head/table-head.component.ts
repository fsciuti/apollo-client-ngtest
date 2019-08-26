import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-head, [appTableHead]',
  template: `
      <tr>
        <th scope="col" *ngFor="let field of fields">{{ field }}</th>
      </tr>
  `
})
export class TableHeadComponent implements OnInit {
  @Input() fields: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
