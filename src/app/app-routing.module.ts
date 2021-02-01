import { ViewCardComponent } from './view-card/view-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { RouterModule, Routes} from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import { ZanzibarComponent } from './zanzibar/zanzibar.component';
import { ParkComponent } from './park/park.component';
import { ListCardsComponent } from './list-cards/list-cards.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'zanzibar', component: ZanzibarComponent },
  { path: 'park', component: ParkComponent},
  { path: 'list-cards', component: ListCardsComponent},
  {path: 'view-card', component: ViewCardComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
})
export class AppRoutingModule { }
