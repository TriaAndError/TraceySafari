import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {

  @Input() head: string;
  @Input() content: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
