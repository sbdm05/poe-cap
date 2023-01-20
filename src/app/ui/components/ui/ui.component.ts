import { Component, OnInit } from '@angular/core';

// decorateur
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
