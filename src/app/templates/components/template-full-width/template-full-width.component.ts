import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss'],
})
export class TemplateFullWidthComponent implements OnInit {
  // créer une propriété @Input()
  @Input() title!: string;

  constructor() {
    // console.log(this.title, 'constructor'); // undefined
  }

  // lifecycle hook = accroche
  ngOnInit(): void {
    // console.log(this.title, 'ngOnInit'); // on reçoit le titre
  }

  ngOnChanges(arg: SimpleChanges) {
    // console.log(arg, 'ngOnChanges'); // on reçoit le titre
  }

  // se déclenche quand le composant est détruit
  ngOnDestroy() {
    // console.log('détruit');
    // garder en mémoire des infos
  }
}
