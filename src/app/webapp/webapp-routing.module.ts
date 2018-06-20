import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { Asgn1Component } from './asgn1/asgn1.component';
import { HomeComponent } from '../home';
import { Asgn2Component } from './asgn2/asgn2.component';
import { Asgn3Component } from './asgn3/asgn3.component';

const MyRoute: Routes =
[
  { path: '' , component: HomeComponent },
  { path: 'asgn1' , component: Asgn1Component},
  { path: 'asgn2' , component: Asgn2Component},
  { path: 'asgn3' , component: Asgn3Component},

  // { path: 'notfound' , component: PageNotFoundComponent},
  // { path: 'error' , component: ErrorPageComponent, data: {message: 'Page Not Found!'}},
  // { path: '**' , redirectTo: '/notfound'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(MyRoute, {useHash: true})
  ],
  exports: [
    RouterModule
  ]

})
export class WebappRoutingModule {

}
