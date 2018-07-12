import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent implements OnInit {

  username;
  password;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert('input values = '+'username : '+this.username+' password : '+this.password);
  }

}
