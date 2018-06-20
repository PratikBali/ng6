import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asgn2',
  templateUrl: './asgn2.component.html',
  styleUrls: ['./asgn2.component.css']
})
export class Asgn2Component implements OnInit {

  marvellous = "<Marvellous-Component></Marvellous-Component>";
  constructor() { }

  ngOnInit() {
  }

  onSolution() {
    console.log("Success");
  }

}
