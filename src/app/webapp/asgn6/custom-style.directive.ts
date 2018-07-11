import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private ele:ElementRef)
  {
    this.setcolor();
  }

  setcolor()
  {
    this.ele.nativeElement.style.background = 'yellow';
    this.ele.nativeElement.style.fontSize = '50px' ;
  }

}
