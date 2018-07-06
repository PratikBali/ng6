import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asgn3',
  templateUrl: './asgn3.component.html',
  styleUrls: ['./asgn3.component.css']
})
export class Asgn3Component implements OnInit {
  solution: boolean;

  dummy = 'marvellous';
  dynamicBool = false;
  dynamic = 'Marvellous';
  show = false;
  i = 0;
  staticAlertClosed = false;

  constructor() { }

  ngOnInit() {
  }

  onSolution() {
    console.log('Success');
    this.solution = true;
  }

  fun() {
    setTimeout(() => this.staticAlertClosed = true, 10000);
    this.show = true;
    this.i = this.i + 1;
    console.log(this.i);
     console.log('string interpolation call success');
    // return alert("user defined function called");
  }

  changeText() {
    if (this.dynamicBool === false) {
      this.dynamic = 'Marvellous Infosystems';
      this.dynamicBool = true;
    } else {
      this.dynamic = 'Mr. Piyush Khairnar';
      this.dynamicBool = false;
    }
  }
}
