import { Component, OnInit } from '@angular/core';
import { BreadService } from './bread.service';
import { OrderService } from './order.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IOrder } from '../common/order.interface';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  breadNames: string[];
  breadSizes: string[];

  name: FormControl;
  size: FormControl;
  quantity: FormControl;
  orderForm: FormGroup;

  orderMode: boolean;
  orders: IOrder[] = this.orderService.displayOrders();

  constructor(private breadService: BreadService, private router: Router, private orderService: OrderService) {}

  addBreadSize(name: string) {
    this.breadSizes = this.breadService.getBreadSizes(name);
  }

  addToOrder(formValues) {
    if (this.orderForm.invalid) {
      alert('Your order is not complete. Please fill in all fields.');
      return;
    }
    this.orderService.addOrder(formValues);
  }

  viewOrders(): any {
    const orders: IOrder[] = this.orderService.displayOrders();
    if (orders.length === 0) {
      // Add a custom validation message
      alert('You have no orders!')
      return;
    }
    this.orderMode = true;
  }

  ngOnInit() {
    this.breadNames = this.breadService.getBreadNames();

    this.name = new FormControl('', Validators.required);
    this.size = new FormControl('', Validators.required);
    this.quantity = new FormControl('', Validators.required);

    this.orderForm = new FormGroup({
      name: this.name,
      size: this.size,
      quantity: this.quantity
    })
  }

}
