import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  // Créer propriété pour stocker data
  public item!: Order; // undefined

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    /* Extraire l'id de l'url
        Appel au service
        Dans le service : retrouver item par son id
        Passer item à app-form-order
    */

    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log(typeof id); // type d'une variable

    this.ordersService.getItemById(id).subscribe((data) => {
      // placer data dans item
      this.item = data;
      // console.log(this.item);
    });
  }

  ngOnInit(): void {}

  onEdit(obj: Order) {
    // console.log(obj, 'depuis on edit'); // this.form.value
    /*
    envoyer au serveur l'objet modifié ?
    Dans ordersService, déclencher la méthode update
    */
    this.ordersService.update(obj).subscribe((data) => {
      // Redirection
      this.router.navigate(['orders']);
    });
  }
}
