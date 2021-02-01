import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { TrendingComponent } from './trending/trending.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TrekkingComponent } from './trekking/trekking.component';
import { ZanzibarComponent } from './zanzibar/zanzibar.component';

import { DestinationsComponent } from './destinations/destinations.component';
import { ExploreComponent } from './explore/explore.component';
import { SafarisComponent } from './safaris/safaris.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { AboutUsComponent } from './about-us/about-us.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {SafariIllustratorComponent} from './safaris/safariIllustraor';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {MatInputModule} from '@angular/material/input';
import { TeamComponent } from './team/team.component';

import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ParkComponent } from './park/park.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { ViewCardComponent } from './view-card/view-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    TrendingComponent,
    AboutUsComponent,
    ToolbarComponent,
    TestimonialComponent,
    TrekkingComponent,
    DestinationsComponent,
    ExploreComponent,
    SafarisComponent,
    SafariIllustratorComponent,
    ContactUsComponent,
    TeamComponent,
    ZanzibarComponent,
    ParkComponent,
    CarouselComponent,
    CardComponent,
    ListCardsComponent,
    ViewCardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatGridListModule,
    OwlModule,
    CarouselModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
