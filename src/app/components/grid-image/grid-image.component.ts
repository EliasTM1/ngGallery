import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-image',
  templateUrl: './grid-image.component.html',
  styleUrls: ['./grid-image.component.scss'],
})
export class GridImageComponent implements AfterViewInit {

  ngAfterViewInit(): void {

  }

  @Input() img: string = '';
  @Input() name: string = '';
  @Input() artist: string = '';

  prepareArg() {
    return this.name.replace(/\s+/g, '_')
  }



}
