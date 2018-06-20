import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-asgn1',
  templateUrl: './asgn1.component.html',
  styleUrls: ['./asgn1.component.css']
})
export class Asgn1Component implements OnInit {
  solution = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSolution() {
    console.log("Button Clicked");
    this.solution = true;
  }

  onHome() {
    this.router.navigate([""]);
  }
  

}
