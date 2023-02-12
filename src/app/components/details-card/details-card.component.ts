import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { Gallery } from 'src/interfaces/mockData.interface';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})
export class DetailsCardComponent implements OnInit, OnDestroy {
  constructor(
    private activaRoute: ActivatedRoute,
    private galleryService: GalleryService,
  ) {}

  currentMasterpiece: Gallery | any = null;
  fullSizeOpen: boolean = false;
  gallery: Gallery[] = [];
  masterpieceId: string | number | null = '';
  paint: string = '';
  subscriptions: Subscription[] = [];
  activeSlideshow : boolean = false

  ngOnInit(): void {
    this.subscriptions.push(
      this.galleryService.currentWorkId.subscribe(id => {
            this.currentMasterpiece = this.gallery.filter(
            (masterpiece) => masterpiece.id === this.masterpieceId
          );
            this.startNumbrId(id!)
      }),
      this.galleryService.currentGallery.pipe(
      ).subscribe((gallery) =>
        gallery?.forEach((e) => this.gallery.push(e))
      ),
      this.galleryService.currentSlideshowState.subscribe((state) =>
        this.activeSlideshow = state!
      ),
      this.activaRoute.params.subscribe((param) => {
        const { id } = param;
        if (!Number(id)) {
          this.startStrId(id);
        }
      }),

    );
    this.galleryService.changeArtWork(this.currentMasterpiece);
    this.paint = this.currentMasterpiece[0].images.hero.large;
  }



  startStrId(id: any) {
    this.masterpieceId = id.replaceAll('_', ' ');
    this.currentMasterpiece = this.gallery.filter((masterpiece) => masterpiece.name === this.masterpieceId);
    this.galleryService.changeSlideCounter(this.currentMasterpiece[0].id)
    return;
  }

  startNumbrId(id: number) {
    // TODO : Change implementation on the observable
    this.masterpieceId = id;
    this.galleryService.changeSlideCounter(this.masterpieceId);
    this.galleryService.currentSlideshowCounter.subscribe((count) => {
      this.masterpieceId = count;
      this.currentMasterpiece = this.gallery.filter(
        (masterpiece) => masterpiece.id === this.masterpieceId
      );
    });
    return;
  }

  closePopup() {
    this.fullSizeOpen = false;
  }

  viewFullImg() {
    this.fullSizeOpen = true;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscr) => {
      subscr.unsubscribe();
    });
  }
}
