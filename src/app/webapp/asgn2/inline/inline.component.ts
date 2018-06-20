import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template:
  `
  
  Marvellous Infosystem
  <input type=text style="color:pink"> <a style="color:pink;">pink text field</a>

  `,
  styles: [

  ]
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
