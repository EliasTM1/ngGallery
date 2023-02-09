import { GalleryService } from 'src/app/services/gallery.service';
import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, timer } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  constructor(private galleryService: GalleryService, private router: Router) {}

  currentId!: number | null;
  slideshowActive: boolean = false;
  slideshowLegend: string = 'START';
  subscriptions: Subscription[] = [];
  galleryLength: number | null = 0;
  slideshowTimer: any = interval(500);

  ngOnDestroy(): void {
    // * Unsubscribe when component is destroyed
    this.subscriptions.forEach((subsc) => {
      subsc.unsubscribe();
    });
    this.slideshowTimer;
  }

  ngOnInit(): void {
    // * Store the subscription while the component live
    this.subscriptions.push(
      this.galleryService.currentSlideshowCounter.subscribe((countId) => {
        this.currentId = countId;
      })
    );

    // * Take 1 and unsubscribe
    this.galleryService.currentGalleryLength
      .pipe(take(1))
      .subscribe((galleryLength) => {
        this.galleryLength = galleryLength;
      });
  }

  toggleAutoSlideshow() {
    this.slideshowActive = !this.slideshowActive;
    this.slideshowLegend = this.slideshowActive ? 'STOP' : 'START';
    this.galleryService.changeSlideshowStatus(this.slideshowActive);

    if (this.slideshowActive && this.slideshowTimer) {
      this.slideshowTimer = this.slideshowTimer.subscribe((e: any) => {
        e++;
        this.currentId = e;
        this.galleryService.changeSlideCounter(this.currentId);
        if(e === this.galleryLength || e === this.galleryLength! - 1) {
          console.log(e)
        }
      });
    } else {
      this.resetTimer();
    }
  }

  goToGallery() {
    this.router.navigate(['gallery']);
    // this.toggleAutoSlideshow();
    this.slideshowActive = false;
    this.slideshowLegend = 'START';
    this.resetTimer();
  }

  resetTimer() {
    console.log(this.slideshowTimer, "RESET TIMER")
    // if (this.slideshowTimer) return
    this.slideshowTimer.unsubscribe();
    this.slideshowLegend = 'START';
    this.slideshowTimer = interval(1000);
  }
}
