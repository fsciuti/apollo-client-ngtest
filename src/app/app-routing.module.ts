import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerContainerComponent } from './customer/customer-container/customer-container.component';
import { BookingContainerComponent } from './booking/booking-container/booking-container.component';
import { PropertyContainerComponent } from './property/property-container/property-container.component';

const routes: Routes = [
  { path: 'customer', component: CustomerContainerComponent, pathMatch: 'full' },
  { path: 'property', component: PropertyContainerComponent, pathMatch: 'full' },
  { path: '', component: BookingContainerComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
