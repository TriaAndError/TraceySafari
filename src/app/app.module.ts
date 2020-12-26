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

import { DestinationsComponent } from './destinations/destinations.component';
import { ExploreComponent } from './explore/explore.component';
import { SafarisComponent } from './safaris/safaris.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { AboutUsComponent } from './about-us/about-us.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

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
    SafarisComponent
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
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
