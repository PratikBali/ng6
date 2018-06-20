import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Asgn1Component } from './asgn1/asgn1.component';
import { Asgn2Component } from './asgn2/asgn2.component';
import { Asgn3Component } from './asgn3/asgn3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Asgn1Component, Asgn2Component, Asgn3Component],
  exports: [RouterModule]
})
export class WebappModule { }
