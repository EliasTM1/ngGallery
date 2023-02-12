import {  Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-grid-image',
  templateUrl: './grid-image.component.html',
  styleUrls: ['./grid-image.component.scss'],
})
export class GridImageComponent {

  hoverOver : Boolean = false;
  @Input() img: string = '';
  @Input() name: string = '';
  @Input() artist: string = '';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hoverOver = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hoverOver = false;
  }

  prepareArg() {
    return this.name.replace(/\s+/g, '_')
  }

}
