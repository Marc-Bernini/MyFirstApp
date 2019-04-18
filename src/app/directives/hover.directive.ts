import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.renderer.addClass(this.elRef.nativeElement, 'firstMovie');
  }

  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.renderer.removeClass(this.elRef.nativeElement, 'firstMovie');
  }

  ngOnInit() {}

}
