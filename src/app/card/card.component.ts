import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() imgs: any[];
  @Input() text: string;

  view (title: string, imgs: any[], text: string) {
    this.router.navigateByUrl('/view-card', { state:{ data:{
      title:title,
      imgs:imgs,
      text: text
    } } })
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
