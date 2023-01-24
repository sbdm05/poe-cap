import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// decorateur
@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrls: ['./icon-close.component.scss'],
})

// ici toutes les propriétés et méthodes
export class IconCloseComponent implements OnInit {
  public myIcon = faTimes;

  constructor() {}

  ngOnInit(): void {}
} // NE RIEN ECRIRE EN DEHORS
