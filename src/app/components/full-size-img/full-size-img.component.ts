import { Subscription } from 'rxjs';
import { Component, Input, OnInit , Output, EventEmitter, OnDestroy } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { Gallery } from 'src/interfaces/mockData.interface';


@Component({
  selector: 'app-full-size-img',
  templateUrl: './full-size-img.component.html',
  styleUrls: ['./full-size-img.component.scss']
})
export class FullSizeImgComponent implements OnInit, OnDestroy {

  constructor(
    private galleryService : GalleryService
  ) { }

  ngOnDestroy(): void {
    console.log("Elias")
  }

  currentArtWork! : Gallery | any
  subscriptions: Subscription[] = []
  somestr : any
  // img : string = '';
  @Output() close = new EventEmitter<any>();

  ngOnInit(): void {
    this.subscriptions.push(this.galleryService.currentArtwrk.subscribe((artwork) => {

      // if (Object.keys(artwork)) {
        // this.img = artwork!.images?.hero.large
        // console.log(artwork!.images?.hero.large)
        // console.warn(typeof artwork)
        // console.warn(this.img, "this.img")
        // console.warn(artwork,  "artwork")
        // console.warn(this.currentArtWork[0].images.hero.large, "this.currentArtWork[0].images.hero.large")
        // this.img = this.currentArtWork[0].images.hero.large
      // }

    }))
  }

  @Input() img : string = '';
  closeFullSize() {
    this.close.emit();
  }
}
