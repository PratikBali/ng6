import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asgn7',
  templateUrl: './asgn7.component.html',
  styleUrls: ['./asgn7.component.css']
})
export class Asgn7Component implements OnInit {
  solution: boolean;

  constructor() { }

  ngOnInit() {
  }

  onSolution() {
    console.log('Success');
    this.solution = true
  }
}
