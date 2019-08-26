import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-table',
  templateUrl: './property-table.component.html'
})
export class PropertyTableComponent implements OnInit {
  propertyFields = ['#', 'Proprietà', 'Tipo'];
  @Input() properties: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
