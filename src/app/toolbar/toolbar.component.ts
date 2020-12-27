import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('home', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/home-o.svg'));
    iconRegistry.addSvgIcon('zanzibar', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/beach-trees.svg'));
    iconRegistry.addSvgIcon('safari', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/destination.svg'));
    iconRegistry.addSvgIcon('about', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/About.svg'));
    iconRegistry.addSvgIcon('trekking', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/hiking-filled.svg'));
  }

  ngOnInit(): void {
  }

}
