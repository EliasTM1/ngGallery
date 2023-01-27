import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) {}

  mocksPath : string = '../../mocks/data.json'

  getJSON(path: string = this.mocksPath): Observable<any> {
    return this.http.get(path);
}
}
