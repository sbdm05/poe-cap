import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
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

  // changeState
  // déclench update
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    // créer nouvel objet
    const obj = new Order(item);
    // changer l'état
    obj.state = state;
    // déclencher update(obj)
    return this.update(obj);
  }

  // update this.http.put('url'/obj.id, obj)
  public update(obj: Order): Observable<Order> {
    // créer nouvel objet
    return this.http.put<Order>(`http://localhost:3000/orders/${obj.id}`, obj);
  }

  
}
