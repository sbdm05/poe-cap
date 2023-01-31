import { Directive, HostBinding, Input } from '@angular/core';

// decorateur
@Directive({
  selector: '[appState]',
})
// directive = manipuler les attributs d'un élément HTML
// <img appState> src / alt / width / height / class
// <td AppState>
export class StateDirective {
  @Input() etat!: string;
  // Quel attribut on veut cibler ?
  // this.tdClassName = 'nouvelle classe'
  @HostBinding('class') tdClassName!: string;

  constructor() {
    //console.log('depuis directive appstate'); // undefined
  }

  // déclenchée une seule fois
  ngOnInit() {
    // console.log(this.test); // ???
  }

  ngOnChanges() {
    //console.log(this.etat); // ???
    // cibler l'attribut class
    // donner une valeur à la classe
    this.tdClassName = `state-${this.etat.toLowerCase()}`; // rouge
  }
}
