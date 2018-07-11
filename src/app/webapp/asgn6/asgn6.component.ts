import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asgn6',
  templateUrl: './asgn6.component.html',
  styleUrls: ['./asgn6.component.css']
})
export class Asgn6Component implements OnInit {
  solution: boolean;

  constructor() { }

  ngOnInit() {
  }

  onSolution() {
    console.log('Success');
    this.solution = true
  }
}
