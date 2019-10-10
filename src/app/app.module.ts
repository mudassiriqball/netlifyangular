

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { GallaryComponent } from './Component/gallary/gallary.component';
import { ToolbarComponent } from './Component/toolbar/toolbar.component';
import { MainCarouselComponent } from './Component/main-carousel/main-carousel.component';
import { PageFooterComponent } from './Component/page-footer/page-footer.component';
import { MultiItemCarouselComponent } from './Component/multi-item-carousel/multi-item-carousel.component';
import { BarChartComponent } from './Component/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    GallaryComponent,
    ToolbarComponent,
    MainCarouselComponent,
    PageFooterComponent,
    BarChartComponent,
    MultiItemCarouselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
