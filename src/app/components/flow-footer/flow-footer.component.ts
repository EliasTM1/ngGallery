import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-flow-footer',
  templateUrl: './flow-footer.component.html',
  styleUrls: ['./flow-footer.component.scss']
})
export class FlowFooterComponent implements OnInit, OnDestroy {

  constructor(
    private galleryService: GalleryService
  ) { }

  currentArtwork : any
  subscriptions : Subscription[] = [];
  progress : number = 0;
  galleryLength!: number | null;

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscr => {
      subscr.unsubscribe()
    })
  }

  ngOnInit(): void {
    this.subscriptions.push(this.galleryService.currentArtwrk.subscribe(artwork => {
      this.currentArtwork = artwork
    }))
    this.galleryService.currentGalleryLength.pipe(
      take(1)
    ).subscribe(galleryLength => {
      this.galleryLength = galleryLength
    })
  }

  calculateFill () {
    // 100% - 200 Elementos - 40 Elements === 20%
    // 100% - 200 Elementos - 20 Elements === 10%
    // 100% - 200 Elementos - 10 Elements === 5%
    // % = n Elements
    return this.progress
  }

  goNext() {
    if (this.progress < 100) this.progress = this.progress + 10;
    // * Aumenta el numero ID
    // * Calcula el width

  }

  goBack() {
    if (this.progress > 0) this.progress = this.progress - 10;
  }
}
