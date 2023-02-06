import { Injectable  } from '@angular/core';
import { BehaviorSubject, Observable, defaultIfEmpty, delay, of, tap} from 'rxjs';
import {  filter } from 'rxjs/operators';

import galleryData from '../../mocks/data.json'
import { Gallery } from 'src/interfaces/mockData.interface';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() {

  }

  private galleryAll = new BehaviorSubject<Gallery[] | null>(null);
  currentGallery = this.galleryAll.asObservable();

  private artwork = new BehaviorSubject<Gallery | null>(null);
  currentArtwrk = this.artwork.asObservable();

  changeView(view: any) {
    this.galleryAll.next(view);
  }

  changeArtWork(view: any) {
    this.artwork.next(view);
  }

  getGallery (id?  :string) : Observable<any> {
    console.log(id)
    if (id) {
      return of(galleryData)
      .pipe(
        delay(50),
        tap(value => console.error(value, "VALSTAP")),
        tap(value => {
          this.changeView(value)
          console.error(value, "VALSTAP")
        }),

        defaultIfEmpty("No data :("),
        )
    }
    return of(galleryData).pipe(
      delay(50),
      tap(value => console.log(value)),
      tap(value => {
        this.changeView(value)
        console.error(value, "VALSTAP")
      }),
      defaultIfEmpty("No data :("),

      )
  }


}
