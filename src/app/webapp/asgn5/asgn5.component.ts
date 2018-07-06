import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asgn5',
  templateUrl: './asgn5.component.html',
  styleUrls: ['./asgn5.component.css']
})
export class Asgn5Component implements OnInit {
  solution: boolean;

  constructor() { }

  ngOnInit() {
  }

  onSolution() {
    console.log('Success');
    this.solution = true;
  }
}
