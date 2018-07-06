import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public parentData;
  @Output() public EventObj = new EventEmitter;

  childData = 'Hello from child';

  constructor() { }

  ngOnInit() {
  }

  sendToParent() {
    this.EventObj.emit(this.childData);
  }

}
