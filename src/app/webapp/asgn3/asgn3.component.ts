import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asgn3',
  templateUrl: './asgn3.component.html',
  styleUrls: ['./asgn3.component.css']
})
export class Asgn3Component implements OnInit {
  solution: boolean;

  constructor() { }

  ngOnInit() {
  }

  onSolution() {
    console.log("Success");
    this.solution = true;
  }

}
