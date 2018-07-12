import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

carName;
carType;
carColor;
carNumber;
carSeats;

  constructor() { }

  ngOnInit() {
  }

}
