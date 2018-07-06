import { DatabasesComponent } from './databases/databases.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { OperatingSystemComponent } from './operating-system/operating-system.component';
import { ProgrammingLanguageComponent } from './programming-language/programming-language.component';

const MyRoute: Routes =
[
  { path: 'asgn4/os' , component: OperatingSystemComponent},
  { path: 'asgn4/lang' , component: ProgrammingLanguageComponent},
  { path: 'asgn4/db' , component: DatabasesComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(MyRoute, {useHash: true})
  ],
  exports: [
    RouterModule
  ]

})
export class Asgn4RoutingModule {

}
