import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Asgn1Component } from './asgn1/asgn1.component';
import { Asgn2Component } from './asgn2/asgn2.component';
import { Asgn3Component } from './asgn3/asgn3.component';
import { InlineComponent } from './asgn2/inline/inline.component';
import { SubComponent } from './asgn2/sub/sub.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [Asgn1Component, Asgn2Component, Asgn3Component, InlineComponent, SubComponent],
  exports: [RouterModule]
})
export class WebappModule { }
