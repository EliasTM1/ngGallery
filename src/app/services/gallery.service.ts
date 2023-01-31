import { Injectable } from '@angular/core';
import {Observable, defaultIfEmpty, delay, of} from 'rxjs';
import galleryData from '../../mocks/data.json'

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() {

  }


  getGallery () : Observable<any> {
    return of(galleryData).pipe(
      delay(50),
      defaultIfEmpty("No data :(")
      )
  }
}
