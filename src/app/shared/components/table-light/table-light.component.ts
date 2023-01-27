import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
})
export class TableLightComponent implements OnInit {
  // utiliser une propriété qui vient du parent
  @Input() collection!: Order[];
  @Input() headers!: string[];

  constructor() {
    // console.log(this.collection, 'constructor'); // undefined
  }

  // cycle de vie - déclenchée une seule fois
  ngOnInit(): void {
    // console.log(this.collection, 'ngOnInit'); // ???
    // on a besoin de faire quelque chose avec this.collection
    // console.log(this.headers)
  }
}
