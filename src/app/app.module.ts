import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './main/navbar/navbar.component';
import { FooterComponent } from './main/footer/footer.component';
import { ErrorPageComponent } from './main/error-page/error-page.component';

import { AngularModule } from './angular/angular.module'

import { WebappModule } from './webapp/webapp.module';
import { WebappRoutingModule } from './webapp/webapp-routing.module';
import { Asgn4RoutingModule } from './webapp/asgn4/routing/asgn4-routing.module';

import { HttpClientModule } from '@angular/common/http';
// configuration
import { environment } from '../environments/environment';
// connecting firebase
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule} from 'angularfire2';
// use database
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule} from 'angularfire2/database'

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
        AngularModule,
    Asgn4RoutingModule,
    HttpClientModule,    // Add the name into import
    NgbModule.forRoot(),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)

    // BrowserAnimationsModule,
    // MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
