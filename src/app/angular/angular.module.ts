import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseComponent } from './firebase/firebase.component';

import { AngularRoutingModule } from './angular-routing.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, BrowserAnimationsModule, NgbModule,
    AngularRoutingModule
  ],
  declarations: [FirebaseComponent]
})
export class AngularModule { }
