import { Component, OnInit } from '@angular/core';

export interface City {
  value;
  viewValue;
}

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

   cities: City[] = [
    {value: '0', viewValue: 'Baramati'},
    {value: '1', viewValue: 'Pune'},
    {value: '2', viewValue: 'Mumabai'},
    {value: '2', viewValue: 'Nashik'},
    {value: '2', viewValue: 'Yavatmal'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
