import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { FooterComponent } from './main/footer/footer.component';
import { HomeModule } from './home/home.module';
import { WebappModule } from './webapp/webapp.module';
import { WebappRoutingModule } from './webapp/webapp-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Asgn4RoutingModule } from './webapp/asgn4/routing/asgn4-routing.module';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './main/error-page/error-page.component';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
// import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ErrorPageComponent
      ],
  imports: [
    BrowserModule,
    HomeModule,
    WebappModule,
    WebappRoutingModule,
    Asgn4RoutingModule,
    HttpClientModule,    // Add the name into import
    NgbModule.forRoot(),
    // BrowserAnimationsModule,
    // MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
