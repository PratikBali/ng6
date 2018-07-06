import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operating-system',
  templateUrl: './operating-system.component.html',
  styleUrls: ['./operating-system.component.css']
})
export class OperatingSystemComponent implements OnInit {

  os = [
    {id: 1, name: "MacOS", res: "Apple"},
    {id: 2, name: "Unix", res: "Bell"},
    {id: 3, name: "Linux", res: "Linus Tordval"},
    {id: 4, name: "BeOS", res: "Jean Louis Gasse"},
    {id: 5, name: "iOS", res: "Apple"},
    {id: 6, name: "Android", res: "Google"},
    {id: 7, name: "Windows", res: "Microsoft"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
