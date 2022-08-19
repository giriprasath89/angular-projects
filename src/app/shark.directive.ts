import {
  Directive,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive(
  { selector: '[appShark]' }
)
export class SharkDirective {
  creature = 'Dolphin';
  creature1 = 'Dolphin1';

  constructor(elem: ElementRef, renderer: Renderer2) {
    console.log(elem)
    let shark = renderer.createText('Shark ');
    renderer.appendChild(elem.nativeElement, shark);
  }
}