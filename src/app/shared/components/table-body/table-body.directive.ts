import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appTableBody]'
})
export class TableBodyDirective implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
