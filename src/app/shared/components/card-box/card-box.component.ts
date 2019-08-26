import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html'
})
export class CardBoxComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
