import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onOS() {
   this.router.navigate(['asgn4/os']);
  }

  onLang() {
    this.router.navigate(['asgn4/lang']);

  }

  onDB() {
    this.router.navigate(['asgn4/db']);

  }
}
