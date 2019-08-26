import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBoxComponent } from './components/side-box/side-box.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { TableComponent } from './components/table/table.component';
import { TableHeadComponent } from './components/table-head/table-head.component';
import { TableBodyDirective } from './components/table-body/table-body.directive';

@NgModule({
  declarations: [
    SideBoxComponent,
    CardBoxComponent,
    TableComponent,
    TableHeadComponent,
    TableBodyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBoxComponent,
    CardBoxComponent,
    TableComponent,
    TableHeadComponent,
    TableBodyDirective
  ]
})
export class SharedModule { }
