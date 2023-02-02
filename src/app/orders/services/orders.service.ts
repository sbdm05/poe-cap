import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

// decorator
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // private collection$!: Observable<Order[]>;

  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>(
    []
  );

  /*
    refreshCollection()
    appel http.subscribe
    résultat de cet appel http => alimenté un obs chaud

    Dans le getter ()
    return le resultat de l'observable chaud

    Dans le delete, déclencher refreshCollection()
  */

  private url = environment.urlApi;

  constructor(private http: HttpClient) {
    // on déclenche le setter
    // this.collection = this.http.get<Order[]>(`${this.url}/orders`);
    this.refreshCollection();
  }

  // Méthode refreshCollection
  public refreshCollection() {
    this.http.get<Order[]>(`${this.url}/orders`).subscribe((data) => {
      // ici on va passer data à l'observable chaud
      this.collection$.next(data);
    });
  }

  // getter => this.ordersService.collection.subscribe()
  public get collection(): Observable<Order[]> {
    // on récupère la propriété privée
    this.refreshCollection();
    return this.collection$; // observable chaud
  }

  // setter
  // public set collection(col: Observable<Order[]>) {
  //   // ici on attribue une valeur à une propriété privée
  //   this.collection$ = col;
  // }

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
    return this.http.put<Order>(`${this.url}/orders/${obj.id}`, obj);
  }

  // add order
  public add(obj: Order): Observable<Order> {
    return this.http.post<Order>(`${this.url}/orders`, obj);
  }

  // getItemById
  public getItemById(id: number): Observable<Order> {
    // appel http
    return this.http.get<Order>(`${this.url}/orders/${id}`);
  }

  // delete order
  // this.http.delete(url/orders/id)
  public delete(id: number) {
    return this.http.delete(`${this.url}/orders/${id}`).pipe(
      // déclencher une méthode
      tap(() => {
        // déclencher refreshCollection
        this.refreshCollection(); // donner une nouvelle valeur à collection$
      })
    );
  }
}
