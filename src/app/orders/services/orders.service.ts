import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

// decorator
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    // on déclenche le setter
    this.collection = this.http.get<Order[]>('http://localhost:3000/orders');
  }

  // getter => this.ordersService.collection.subscribe()
  public get collection(): Observable<Order[]> {
    // on récupère la propriété privée
    return this.collection$;
  }

  // setter
  public set collection(col: Observable<Order[]>) {
    // ici on attribue une valeur à une propriété privée
    this.collection$ = col;
  }
}
