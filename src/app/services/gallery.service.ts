import { Injectable  } from '@angular/core';
import { BehaviorSubject, Observable, defaultIfEmpty, delay, of, tap} from 'rxjs';
import {  filter } from 'rxjs/operators';

import galleryData from '../../mocks/data.json'
import { Gallery } from 'src/interfaces/mockData.interface';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private galleryAll = new BehaviorSubject<Gallery[] | null>(null);
  currentGallery = this.galleryAll.asObservable();

  private artwork = new BehaviorSubject<Gallery | null>(null);
  currentArtwrk = this.artwork.asObservable();

  private slideshowState = new BehaviorSubject<boolean | null>(true);
  currentSlideshowState = this.slideshowState.asObservable();

  private slideshowCounter = new BehaviorSubject<number | null>(null);
  currentSlideshowCounter = this.slideshowCounter.asObservable();

  private galleryLength = new BehaviorSubject<number | null>(galleryData.length);
  currentGalleryLength = this.galleryLength.asObservable();

  changeView(view: any) {
    this.galleryAll.next(view);
  }

  changeArtWork(view: any) {
    this.artwork.next(view);
  }

  changeSlideshowStatus(state: boolean) {
    this.slideshowState.next(state);
  }

  changeSlideCounter(state: number | null) {
    if (!state) return
    this.slideshowCounter.next(state);
  }


  getGallery () : Observable<any> {
  return of(galleryData).pipe(
      delay(50),
      tap(value => {
        this.changeView(value)
      }),
      defaultIfEmpty("No data :("),

      )
  }


}
