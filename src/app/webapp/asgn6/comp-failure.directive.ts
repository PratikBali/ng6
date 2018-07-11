import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private ele:ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('red');
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
