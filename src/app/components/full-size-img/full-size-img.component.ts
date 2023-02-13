import { Subscription } from 'rxjs';
import { Component, Input, OnInit , Output, EventEmitter, OnDestroy } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { Gallery } from 'src/interfaces/mockData.interface';


@Component({
  selector: 'app-full-size-img',
  templateUrl: './full-size-img.component.html',
  styleUrls: ['./full-size-img.component.scss']
})
export class FullSizeImgComponent {

  constructor(
    private galleryService : GalleryService
  ) { }



  currentArtWork! : Gallery | any
  subscriptions: Subscription[] = []
  somestr : any
  // img : string = '';
  @Output() close = new EventEmitter<any>();



  @Input() img : string = '';
  closeFullSize() {
    this.close.emit();
  }
}
