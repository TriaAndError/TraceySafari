import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {

  // @Input() head: string;
  // @Input() content: any[];
  content: any[];
  title: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    const cont = history.state;
    const real = cont["data"];
    // console.log(real);

    if (real) {

      this.content = real;
      this.title = cont['title'];

      if (localStorage.getItem('mainTitle') !== cont['title']) {

        localStorage.setItem('mainTitle', cont['title']);
        localStorage.setItem('theList', JSON.stringify(real));

        // console.log(JSON.parse(localStorage.getItem('content')));

      }

    } else {

      this.title = localStorage.getItem('mainTitle');
      this.content = JSON.parse(localStorage.getItem('theList'));

      console.log(this.content)
    }

  }

}
