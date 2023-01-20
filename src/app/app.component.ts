import { Component } from '@angular/core';

// fichier JS
// decorator = metadatas
@Component({
  // nom de votre composant <app-root></app-root>
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// class
export class AppComponent {
  title = 'crm';
  // props et méthodes disponibles dans ce composant
}
