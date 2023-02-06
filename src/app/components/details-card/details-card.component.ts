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
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private activaRoute : ActivatedRoute,
    private galleryService: GalleryService
    ) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscr =>{
      subscr.unsubscribe()
    })
  }

    masterpieceId : string = '';
    subscriptions : Subscription[] = [];
    galleryObs : Gallery[] = [];
    currentMasterpiece : Gallery | any = null;
    paint : string = '';;
    fullSizeOpen : boolean = false;;

  ngOnInit(): void {
    // * Get param id
    this.activaRoute.params.subscribe(param => {
      const { id } = param;
      this.masterpieceId = id.replaceAll("_", " ").replace("-", " ");
    })
    // add Subscription
    this.subscriptions.push(this.galleryService.currentGallery.subscribe(gallery => gallery?.forEach(e => this.galleryObs.push(e))))
    this.currentMasterpiece = this.galleryObs.filter(masterpiece => masterpiece.name === this.masterpieceId)
    console.warn(this.currentMasterpiece, "MASTER MASTERMASTER")
    this.galleryService.changeArtWork(this.currentMasterpiece);
    this.galleryService.currentArtwrk.subscribe(e => {
      console.log("ASTER gust", e)
    })
    this.paint = this.currentMasterpiece[0].images.hero.large
  }

  closePopup() {
    this.fullSizeOpen = false;
  }

  viewFullImg() {
    this.fullSizeOpen = true
  }

}
