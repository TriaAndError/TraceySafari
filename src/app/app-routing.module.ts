import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { RouterModule, Routes} from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import { ZanzibarComponent } from './zanzibar/zanzibar.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'zanzibar', component: ZanzibarComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
})
export class AppRoutingModule { }
