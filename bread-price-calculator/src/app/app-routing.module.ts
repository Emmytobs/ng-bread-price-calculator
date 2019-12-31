import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'order/add', component: CreateOrderComponent},
  {path: 'order/summary', component: OrderSummaryComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
