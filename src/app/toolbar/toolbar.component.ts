import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

	toggleNav() {
	  	var burger = document.querySelector('.burger');
	  	var nav = document.querySelector('#navbarMenu');
	  	
		burger.classList.toggle('is-active');
		nav.classList.toggle('is-active');
	  };

  constructor() { }

  ngOnInit(): void {
  }

}
