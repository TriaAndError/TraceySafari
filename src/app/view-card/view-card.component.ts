import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit {
  title: any;
  text: any;
  imgs: any[];

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(history.state);
    // console.log(this.router.url);

    const data = history.state['data'];

    if (data) {

      if (localStorage.getItem('title') !== data['title']) {

      var title = data['title'];
      var text = data['text'];
      var imgs = data['imgs'];

      this.title = data['title'];
      this.text = data['text'];
      this.imgs = data['imgs'];

      localStorage.setItem('title', title);
      localStorage.setItem('text', text);
      localStorage.setItem('imgs', imgs);
      }
    }
    else
    {
      this.title = localStorage.getItem('title');
      this.imgs = localStorage.getItem('imgs').split(',');
      this.text = localStorage.getItem('text');
    }

    console.log('from local', localStorage.getItem('imgs').split(','));

  }

}
