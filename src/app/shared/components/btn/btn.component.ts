import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  // déclarations des props qui viennent du parent @Input()
  @Input() label!: string;
  @Input() route!: string;
  @Input() styleBtn!: string;

  constructor() {}

  ngOnInit(): void {}
}
