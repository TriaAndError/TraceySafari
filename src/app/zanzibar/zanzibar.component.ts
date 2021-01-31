import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-zanzibar',
  templateUrl: './zanzibar.component.html',
  styleUrls: ['./zanzibar.component.css'],
})
export class ZanzibarComponent implements OnInit {
  // slider = {
  //   items: 1,
  //   dots: true,
  //   nav: true,
  //   loop: true,
  //   navText: ['&#8249', '&#8250;'],
  // };
  constructor() {}

  ngOnInit(): void {}

  slider: OwlOptions = {
    items: 1,
    loop: true,
    mouseDrag: false,
    autoplay: true,
    autoHeight: true,
    autoWidth: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      760: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
    nav: true,
  };
}
