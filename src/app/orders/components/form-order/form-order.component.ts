import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  public form!: FormGroup;

  // Besoin de convertir StateOrder en array
  public states = Object.values(StateOrder);

  // Récupérer init du parent
  @Input() init!: Order;

  // 1 - Propriété pour événement
  @Output() submitted = new EventEmitter(); // new Subject()

  constructor(private fb: FormBuilder) {
    // console.log(this.init); // ??? undefined
  }

  ngOnInit(): void {
   // console.log(this.init); // ??? undefined
    this.form = this.fb.group({
      // créer un objet
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [
        this.init.typePresta,
        [Validators.required, Validators.minLength(3)],
      ],
      client: [
        this.init.client,
        [Validators.required, Validators.minLength(3)],
      ],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  // au submit, on veut récupérer un objet: Order et envoyer au back Order[]
  public onSubmit() {
    // console.log(this.form.value);
    // envoyer this.form.value au parent
    // 2 - déclencher la propriété
    // semblable à .next
    this.submitted.emit(this.form.value); // .next
  }
}

/* étapes :
- ajouter des validators sur typePresta et client
- rendre inactif le bouton si form n'est pas valide
- afficher messages d'erreur
*/
