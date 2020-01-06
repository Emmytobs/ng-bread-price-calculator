import { Component, OnInit, Input } from '@angular/core';

import { IOrder } from '../common/order.interface';
import { OrderService } from '../create-order/order.service';
import { Router } from '@angular/router';
import { BreadService } from '../create-order/bread.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  orders = this.orderService.getOrders();
  constructor(private orderService: OrderService, private router: Router, private breadService: BreadService) { }

  routeToOrders() {
    this.router.navigate(['order/add']);
  }

  getOrderInfo() {

    // For each order name and size, compare them with that in the breadList and get the corresponding purchasePrice and sellingPrice
    const orders = this.orderService.getOrders();
    // Order Amount
    const orderAmountArr = orders.map(order => {
      return order.purchasePrice * order.quantity;
    })
    const orderAmount = orderAmountArr.reduce((total, currentValue) => {
      return total + currentValue;
    });

    // Expected Sales Amount
    const salesAmountArr = orders.map(order => {
      return order.sellingPrice * order.quantity;
    })
    const salesAmount = salesAmountArr.reduce((total, currentValue) => {
      return total + currentValue;
    });

    // Estimated profit
    const profit = salesAmount - orderAmount;

    return {
      profit,
      orderAmount,
      salesAmount
    }
  }

  ngOnInit() {
    // this.orders = this.orderService.getOrders();
  }

}
