import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { FirebaseComponent } from './firebase/firebase.component';
import { HomeComponent } from '../home';

const MyRoute: Routes =
[
  { path: 'home', component: HomeComponent },
  { path: 'firebase', component: FirebaseComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(MyRoute)
  ],
  exports: [
    RouterModule
  ]

})
export class AngularRoutingModule {

}
