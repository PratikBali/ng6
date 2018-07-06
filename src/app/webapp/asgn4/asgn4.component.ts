import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asgn4',
  templateUrl: './asgn4.component.html',
  styleUrls: ['./asgn4.component.css']
})
export class Asgn4Component implements OnInit {

  solution: boolean;
  message = 'Hello from parent';
  public childData;

  constructor() { }

  ngOnInit() {
  }

  onSolution() {
    console.log('Success');
    this.solution = true;
  }
}
