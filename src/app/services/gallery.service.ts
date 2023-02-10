import { Injectable  } from '@angular/core';
import { BehaviorSubject, Observable, defaultIfEmpty, delay, of, tap} from 'rxjs';
import {  filter } from 'rxjs/operators';

import galleryData from '../../mocks/data.json'
import { Gallery } from 'src/interfaces/mockData.interface';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  // * Store all de Gallery
  private galleryAll = new BehaviorSubject<Gallery[] | null>(galleryData);
  currentGallery = this.galleryAll.asObservable();

  // * Store selected arwork
  private artwork = new BehaviorSubject<Gallery | null>(null);
  currentArtwrk = this.artwork.asObservable();

  private slideshowState = new BehaviorSubject<boolean | null>(true);
  currentSlideshowState = this.slideshowState.asObservable();

  private slideshowCounter = new BehaviorSubject<number | null>(1);
  currentSlideshowCounter = this.slideshowCounter.asObservable();

  // * Lenght of the stored Gallery
  private galleryLength = new BehaviorSubject<number | null>(galleryData.length);
  currentGalleryLength = this.galleryLength.asObservable();

  private workId = new BehaviorSubject<number | null>(galleryData.length);
  currentWorkId = this.workId.asObservable();




  // * Change the observables ⬇️

  changeView(view: any) {
    this.galleryAll.next(view);
  }

  changeArtWork(view: any) {
    this.artwork.next(view);
    this.workId.next(view[0].id)
  }

  changeSlideshowStatus(state: boolean) {
    this.slideshowState.next(state);
  }

  changeSlideCounter(state: number | null) {
    if (!state) return
    this.slideshowCounter.next(state);
  }

  // ? Might not need 🔴
  changeProgress(progress: number | null) {
    this.slideshowCounter.next(progress);
  }

  getGallery () : Observable<any> {
  return of(galleryData).pipe(
      delay(500),
      tap(value => {
        this.changeView(value)
      }),
      defaultIfEmpty("No data :("),
      )
  }
}
