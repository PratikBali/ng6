import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Asgn1Component } from './asgn1/asgn1.component';
import { Asgn2Component } from './asgn2/asgn2.component';
import { Asgn3Component } from './asgn3/asgn3.component';
import { InlineComponent } from './asgn2/inline/inline.component';
import { SubComponent } from './asgn2/sub/sub.component';
import { RootComponent } from './asgn3/root/root.component';
import { FirstComponent } from './asgn3/first/first.component';
import { SecondComponent } from './asgn3/second/second.component';
import { ThirdComponent } from './asgn3/third/third.component';
import { FourthComponent } from './asgn3/fourth/fourth.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [Asgn1Component, Asgn2Component, Asgn3Component, InlineComponent, SubComponent, RootComponent, FirstComponent, SecondComponent, ThirdComponent, FourthComponent],
  exports: [RouterModule]
})
export class WebappModule { }
