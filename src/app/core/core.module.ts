import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { NavHeaderComponent } from './components/nav-header/nav-header.component';

@NgModule({
  declarations: [
    NavHeaderComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    NavHeaderComponent,
    AppRoutingModule
  ]
})
export class CoreModule { }
