import { Component, OnInit } from '@angular/core';

// decorateur
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  // créer une propriété booléenne
  public open: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // séléctionne le btn
  // ajouter un addEventListener
  public toggle() {
    // alterner la classe
    // console.log('cliqué');
    // faire alterner la valeur de open
    // inverser la valeur
    this.open = !this.open;
    // console.log(this.open);
  }

}
