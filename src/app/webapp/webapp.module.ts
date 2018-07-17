import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookService } from './asgn4/service/book.service';
import { BatchService } from './asgn4/batch.service';

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
import { Asgn4Component } from './asgn4/asgn4.component';
import { Asgn5Component } from './asgn5/asgn5.component';
import { ChildComponent } from './asgn4/child/child.component';
import { HttpComponent } from './asgn4/http/http.component';
import { ServiceComponent } from './asgn4/service/service.component';
import { SubComponent1 } from './asgn4/service/sub-component1/sub-component1.component';
import { SubComponent2 } from './asgn4/service/sub-component2/sub-component2.component';
import { SubComponent3 } from './asgn4/service/sub-component3/sub-component3.component';
import { RoutingComponent } from './asgn4/routing/routing.component';
import { OperatingSystemComponent } from './asgn4/routing/operating-system/operating-system.component';
import { ProgrammingLanguageComponent } from './asgn4/routing/programming-language/programming-language.component';
import { DatabasesComponent } from './asgn4/routing/databases/databases.component';
import { FormComponent } from './asgn5/form/form.component';
import { TemplateComponent } from './asgn5/template/template.component';
import { ValidationComponent } from './asgn5/validation/validation.component';
import { Asgn6Component } from './asgn6/asgn6.component';
import { Asgn7Component } from './asgn7/asgn7.component';
import { CompSuccessDirective } from './asgn6/comp-success.directive';
import { CompFailureDirective } from './asgn6/comp-failure.directive';
import { CustomStyleDirective } from './asgn6/custom-style.directive';

import { MaterialFormComponent } from './asgn7/material-form/material-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { TravelComponent } from './asgn7/travel/travel.component'
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatSelectModule} from '@angular/material/select';

import { CarComponent } from './asgn7/car/car.component';

import { BookComponent } from './asgn7/book/book.component';
import { MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule, FormsModule, BrowserAnimationsModule, NgbModule,
    MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule, MatGridListModule, MatSelectModule,
    MatTableModule
  ],
  providers: [BatchService, BookService],
  // tslint:disable-next-line:max-line-length
  declarations: [Asgn1Component, Asgn2Component, Asgn3Component, InlineComponent, SubComponent,
    RootComponent, FirstComponent, SecondComponent, ThirdComponent, FourthComponent,
    Asgn4Component, ChildComponent, HttpComponent, ServiceComponent,
                  Asgn5Component, SubComponent1, SubComponent2, SubComponent3, RoutingComponent, OperatingSystemComponent, ProgrammingLanguageComponent, DatabasesComponent, FormComponent, TemplateComponent, ValidationComponent,
                  Asgn6Component,
                  Asgn7Component,
                  CompSuccessDirective,
                  CompFailureDirective,
                  CustomStyleDirective,
                  MaterialFormComponent,
                  TravelComponent,
                  CarComponent,
                  BookComponent
                ],
  exports: [RouterModule]
})
export class WebappModule { }
