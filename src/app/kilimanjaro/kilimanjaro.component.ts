import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kilimanjaro',
  templateUrl: './kilimanjaro.component.html',
  styleUrls: ['./kilimanjaro.component.css']
})
export class KilimanjaroComponent implements OnInit {


  imgs = [
    '../../assets/img/kili1.jpg',
    '../../assets/img/kili2.jpg',
    '../../assets/img/kili3.jpg',
    '../../assets/img/kili4.jpg',
    '../../assets/img/kili5.jpg',
    '../../assets/img/kili6.jpg'

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
