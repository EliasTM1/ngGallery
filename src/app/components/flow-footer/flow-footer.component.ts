import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-flow-footer',
  templateUrl: './flow-footer.component.html',
  styleUrls: ['./flow-footer.component.scss'],
})
export class FlowFooterComponent implements OnInit, OnDestroy {
  constructor(
    private galleryService: GalleryService,
    private router: Router,

    ) {}

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
    console.warn("NEXT -CURRENT", this.progress)
    if (this.progress < 100 && this.currentWorkId < this.galleryLength!)
    this.progress = this.progress + this.stepLength;
    this.currentWorkId = this.currentWorkId + 1
    this.galleryService.changeGalleryId(this.currentWorkId)
  }

  goBack() {
console.warn(this.currentWorkId, "this.currentWorkIdthis.currentWorkId" )
    if (this.currentWorkId > this.galleryLength!){
      this.router.navigate(['gallery']);
    }
    if (this.currentWorkId !== 0 )
      this.progress = this.progress - this.stepLength;
      this.currentWorkId = this.currentWorkId - 1
      this.galleryService.changeGalleryId(this.currentWorkId)

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscr) => {
      subscr.unsubscribe();
    });
  }
}
