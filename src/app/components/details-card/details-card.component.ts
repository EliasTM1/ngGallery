import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { Gallery } from 'src/interfaces/mockData.interface';


@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit, OnDestroy {

  constructor(
    private activaRoute : ActivatedRoute,
    private galleryService: GalleryService
    ) {}

    masterpieceId : string | number | null = '';
    subscriptions : Subscription[] = [];
    galleryObs : Gallery[] = [];
    currentMasterpiece : Gallery | any = null;
    paint : string = '';;
    fullSizeOpen : boolean = false;
    activeSlideshow : boolean = false

  ngOnInit(): void {
    // * Get param id
    this.subscriptions.push(this.galleryService.currentGallery.subscribe(gallery => gallery?.forEach(e => this.galleryObs.push(e))))
    this.activaRoute.params.subscribe(param => {
      const { id } = param;
      !isNaN(id) ? this.startNumbrId(Number(id)) : this.startStrId(id)
    })
    this.galleryService.changeArtWork(this.currentMasterpiece);
    this.paint = this.currentMasterpiece[0].images.hero.large
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscr =>{
      subscr.unsubscribe()
    })
  }

  startStrId(id : any) {
    this.masterpieceId = id.replaceAll("_", " ")
    this.currentMasterpiece = this.galleryObs.filter(masterpiece => masterpiece.name === this.masterpieceId)
    return;
  }

  startNumbrId(id : number) {
    this.masterpieceId = id
    this.galleryService.changeSlideCounter(this.masterpieceId)
    this.activeSlideshow = true;
    this.galleryService.currentSlideshowCounter.subscribe(count => {
      this.masterpieceId = count
      this.currentMasterpiece = this.galleryObs.filter(masterpiece => masterpiece.id === this.masterpieceId)
    })
    return;
  }

  closePopup() {
    this.fullSizeOpen = false;
  }

  viewFullImg() {
    this.fullSizeOpen = true
  }

}
