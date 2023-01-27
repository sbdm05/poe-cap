import { Directive, Input } from '@angular/core';

// decorateur
@Directive({
  selector: '[appState]',
})
export class StateDirective {
  @Input() etat!: string;

  constructor() {
    console.log('depuis directive appstate'); // undefined
  }

  // déclenchée une seule fois
  ngOnInit(){
    // console.log(this.test); // ???
  }

  ngOnChanges(){
    console.log(this.etat); // ???
    // cibler l'attribut class
    // donner une valeur à la classe

  }

}
