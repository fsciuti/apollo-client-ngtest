import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { BookingTableComponent } from './booking/booking-table/booking-table.component';
import { BookingQuickDetailComponent } from './booking/booking-quick-detail/booking-quick-detail.component';
import { BookingQuickFormComponent } from './booking/booking-quick-form/booking-quick-form.component';
import { CustomerTableComponent } from './customer/customer-table/customer-table.component';
import { CustomerContainerComponent } from './customer/customer-container/customer-container.component';
import { CustomerQuickFormComponent } from './customer/customer-quick-form/customer-quick-form.component';
import { BookingContainerComponent } from './booking/booking-container/booking-container.component';
import { PropertyContainerComponent } from './property/property-container/property-container.component';
import { PropertyQuickFormComponent } from './property/property-quick-form/property-quick-form.component';
import { PropertyTableComponent } from './property/property-table/property-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingTableComponent,
    BookingQuickDetailComponent,
    BookingQuickFormComponent,
    CustomerTableComponent,
    CustomerContainerComponent,
    CustomerQuickFormComponent,
    BookingContainerComponent,
    PropertyContainerComponent,
    PropertyQuickFormComponent,
    PropertyTableComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
