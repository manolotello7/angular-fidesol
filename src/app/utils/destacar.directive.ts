import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[solDestacar]'
})
export class DestacarDirective implements OnInit {
  @Input() solDestacar: any;


  constructor(public eTarget: ElementRef) {
    console.log( this.eTarget);
  }

  ngOnInit() {
    console.log(this.solDestacar);
    this.eTarget.nativeElement.innerHTML += ` [${this.solDestacar}]` ;
  }

  @HostListener('click') onclick() {
    this.eTarget.nativeElement.setAttribute('title', 'Directiva anulada');
    console.log('Click');
  }
}
