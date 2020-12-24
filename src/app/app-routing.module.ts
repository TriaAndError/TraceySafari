import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { RouterModule, Routes} from '@angular/router';
import {ZanzibarComponent} from './zanzibar/zanzibar.component';
import {AboutUsComponent} from './about-us/about-us.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: LandingPageComponent},
  {path: 'zanzibar', component: ZanzibarComponent},
  {path: 'about', component: AboutUsComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
})
export class AppRoutingModule { }
