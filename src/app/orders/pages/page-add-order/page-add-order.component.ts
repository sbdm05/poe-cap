import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  // créer un nouvel objet pour app-form-order
  public item: Order = new Order();

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {}

  public onAdd(obj: Order) {
    console.log(obj); // objet envoyé depuis le formulaire
    // déclencher méthode dans le service et lui passer obj
    this.ordersService.add(obj).subscribe((data) => {
      console.log(data);
      // rediriger l'utilisateur vers /orders/essai
      this.router.navigate(['orders']);
    });
  }
}
