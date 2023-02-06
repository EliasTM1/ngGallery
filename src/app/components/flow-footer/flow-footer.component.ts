import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscr => {
      subscr.unsubscribe()
    })
  }

  currentArtwork : any
  subscriptions : Subscription[] = [];

  ngOnInit(): void {
    this.subscriptions.push(this.galleryService.currentArtwrk.subscribe(artwork => {
      console.log(artwork, "FOOTER ARTW")
      this.currentArtwork = artwork
    }))

  }

  progress : number = 0;

  goNext() {
    if (this.progress < 100) {
      this.progress = this.progress + 10;
    }
  }

  goBack() {
    if (this.progress > 0) {
      this.progress = this.progress - 10;
    }
  }
}
