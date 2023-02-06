import { Component, Input, OnInit , Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-full-size-img',
  templateUrl: './full-size-img.component.html',
  styleUrls: ['./full-size-img.component.scss']
})
export class FullSizeImgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() img : string = '';
  @Output() close = new EventEmitter<any>();

  closeFullSize() {
    this.close.emit();
  }
}
