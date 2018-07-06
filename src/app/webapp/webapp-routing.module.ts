import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from '../home';
import { Asgn1Component } from './asgn1/asgn1.component';
import { Asgn2Component } from './asgn2/asgn2.component';
import { Asgn3Component } from './asgn3/asgn3.component';
import { Asgn4Component } from './asgn4/asgn4.component';
import { Asgn5Component } from './asgn5/asgn5.component';
import { OperatingSystemComponent } from './asgn4/routing/operating-system/operating-system.component';

const MyRoute: Routes =
[
  { path: '' , component: HomeComponent },
  { path: 'asgn1' , component: Asgn1Component},
  { path: 'asgn2' , component: Asgn2Component},
  { path: 'asgn3' , component: Asgn3Component},
  { path: 'asgn4' , component: Asgn4Component},
  { path: 'asgn5' , component: Asgn5Component},
  { path: 'os' , component: OperatingSystemComponent},

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
