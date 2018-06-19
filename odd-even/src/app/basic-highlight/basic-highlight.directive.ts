import { Directive, Inject, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  // @Inject
  constructor(private elementRef: ElementRef) {

  }
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
