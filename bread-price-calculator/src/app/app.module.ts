import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { BreadListComponent } from './bread-list/bread-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CreateOrderComponent,
    OrderSummaryComponent,
    BreadListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
