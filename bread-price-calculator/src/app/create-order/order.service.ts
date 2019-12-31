import { Injectable } from '@angular/core';
import { IOrder } from '../common/order.interface';
import { BreadService } from './bread.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders = []

  constructor(private breadService: BreadService) { }

  addOrder(order: IOrder) {
    this.orders.push(order);
  }

  displayOrders(): IOrder[] {
    return this.orders;
  }

  getOrders() {
    const breadList = this.breadService.getBreadList()
    // Try to see if you can add the purchsePrice and sellingPrice for each bread size in the orders array
    const orders = this.orders.map((order) => {
      breadList.forEach(bread => {
        if(order.name === bread.name) {
          bread.sizes.forEach((size) => {
            if(order.size === size.sizeName) {
              order.purchasePrice = size.purchasePrice;
              order.sellingPrice = size.sellingPrice;
            }
          })
        }
      })
      return order;
    })
    return orders;
  }

  hasOrders(): boolean {
    return this.orders.length > 0 ? true : false;
  }

  ngOnInit() {
  }
}
