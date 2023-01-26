import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss'],
})
export class TemplateContainerComponent implements OnInit {
  // on récupère la valeur passée par le parent
  @Input() title!: string;
  constructor() {}

  ngOnInit(): void {}
}
