import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { FooterComponent } from './main/footer/footer.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { BannerComponent } from './home/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    // BannerComponent
    ],
  imports: [
    BrowserModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
