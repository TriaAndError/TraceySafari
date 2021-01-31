import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.css']
})
export class ParkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slider: OwlOptions = {
    items: 1,
    loop: true,
    mouseDrag: false,
    autoplay: true,
    autoHeight:false,
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

  data: any[] = [
    {
      title: "Park 1",
      description: "Warm breeze of the sea is beautifull",
      imgs: ["../../assets/img/zanzibar1.jpg", "../../assets/img/zanzibar3.jpg"]
    },
    {
      title: "Park 2",
      description: "The past is beatifull",
      imgs: ["../../assets/img/zanzibar2.jpg", "../../assets/img/zanzibar3.jpg"]
    },
    {
      title: "Park 3",
      description: "The people are cool",
      imgs: ["../../assets/img/zanzibar1.jpg", "../../assets/img/zanzibar2.jpg"]
    },
    {
      title: "Park 4",
      description: "The past is beatifull and personal",
      imgs: ["../../assets/img/zanzibar3.jpg", "../../assets/img/zanzibar2.jpg"]
    }
  ]


}
