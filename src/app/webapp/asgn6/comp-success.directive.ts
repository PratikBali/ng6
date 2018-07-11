import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private ele:ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('green');
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.setcolor('white');
  }

  setcolor(color:string)
  {
    this.ele.nativeElement.style.background=color;
  }

}
