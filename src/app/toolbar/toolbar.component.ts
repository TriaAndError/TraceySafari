import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
isVisible = true;
  constructor() {
  }

	toggleNav(): void {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('#navbarMenu');
     	this.isVisible = false;
		burger.classList.toggle('is-active');
		nav.classList.toggle('is-active');
	  }

  ngOnInit(): void {
  }

}
