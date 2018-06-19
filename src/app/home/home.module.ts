import { NgModule, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HOME_ROUTE, HomeComponent } from './';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([ HOME_ROUTE ])
  ],
  declarations: [
    // HeaderComponent,
    BannerComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule implements OnInit{
  ngOnInit() {
    console.log('hi');
  }
}
