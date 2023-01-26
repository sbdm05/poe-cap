import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {

  public titleParent: string = 'Liste des commandes'


  // propriété pour stocker data
  public collection!: Order[];

  // déclencher la prop collection + afficher data dans console.log
  // obtenir les datas très tôt dans la construction du composant

  // accéder au service = injection de dépendances
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection.subscribe((data) => {
      //console.log(data);

      this.collection = data;
      //console.log(this.collection);
    });
  }

  ngOnInit(): void {}
}
