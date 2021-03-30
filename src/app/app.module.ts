import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular Material
import { MaterialModule } from './material-module';
import {MatIconModule} from '@angular/material/icon';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { CardComponent } from './carousel-components/card/card.component';
import { ButtonComponent } from './carousel-components/button/button.component';
import { CarouselComponent } from './carousel-components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MatIconModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
