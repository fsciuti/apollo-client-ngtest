import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-box',
  templateUrl: './side-box.component.html'
})
export class SideBoxComponent implements OnInit {
  @Input() title = '';

  constructor() { }

  ngOnInit() {
  }
}
