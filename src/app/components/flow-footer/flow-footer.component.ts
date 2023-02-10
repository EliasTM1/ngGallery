import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-flow-footer',
  templateUrl: './flow-footer.component.html',
  styleUrls: ['./flow-footer.component.scss'],
})
export class FlowFooterComponent implements OnInit, OnDestroy {
  constructor(private galleryService: GalleryService) {}

  currentArtwork: any;
  subscriptions: Subscription[] = [];
  progress: number = 0;
  galleryLength!: number | null;
  stepLength: number = 0;
  currentCount: number = 0;
  activeSlideshow: boolean = false;
  currentWorkId: number = 0;

  ngOnInit(): void {
    this.prepareFooter();
  }

  prepareFooter() {
    // * Take 1rst element and end subscription
    this.galleryService.currentGalleryLength
      .pipe(take(1))
      .subscribe((galleryLength) => {
        this.galleryLength = galleryLength;
      });
    // * Push existent subscriptions
    this.subscriptions.push(
      this.galleryService.currentArtwrk.subscribe((artwork) => {
        this.currentArtwork = artwork;
      }),
      this.galleryService.currentSlideshowCounter.subscribe((count) => {
        this.currentCount = count!;
        this.calculateFill();
      }),
      this.galleryService.currentSlideshowState.subscribe((state) => {
        this.activeSlideshow = state!;
      }),
      this.galleryService.currentWorkId.subscribe((id) => {
        this.currentWorkId = id!;
      })
    );
  }

  calculateFill() {
    this.stepLength = 100 / this.galleryLength!;
    this.progress = this.currentCount * this.stepLength;
  }

  goNext() {
    if (this.progress < 100)
      this.progress = this.progress + this.stepLength;
  }

  goBack() {
    if (this.progress >= 0 )
      this.progress = this.progress - this.stepLength;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscr) => {
      subscr.unsubscribe();
    });
  }
}
