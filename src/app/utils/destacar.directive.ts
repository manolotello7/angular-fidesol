import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[solDestacar]'
})
export class DestacarDirective {

  constructor(public eTarget: ElementRef) { 
    console.log( this.eTarget);
  }

}
