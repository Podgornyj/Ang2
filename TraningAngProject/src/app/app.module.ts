import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { WeatherComponent } from './weather/weather.component';
import { DetailsComponent } from './details/details.component';
import { HotelFilterPipe } from './common/pipes/hotel-filter.pipe';
import { SrcPipePipe } from './common/pipes/src-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    WeatherComponent,
    DetailsComponent,
    HotelFilterPipe,
    SrcPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
