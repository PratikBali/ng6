import { NgModule, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';
import { HOME_ROUTE } from './home.route';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([ HOME_ROUTE ])
  ],
  declarations: [
    HeaderComponent,
    BannerComponent,
    HomeComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class HomeModule implements OnInit {
  ngOnInit() {
    console.log('home module start');
  }
}
