import { Component, OnInit } from '@angular/core';
import { FormModel } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

data: FormModel = new FormModel();

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

  save() {
    console.log(this.data);

  }

}
