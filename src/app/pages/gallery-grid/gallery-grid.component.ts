import { GalleryTile } from './../../../interfaces/mockData.interface';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { first, tap, switchMap, Subscription } from 'rxjs';
import { GalleryService } from '../../services/gallery.service';
import { Gallery } from '../../../interfaces/mockData.interface';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss']
})
export class GalleryGridComponent implements OnInit , OnDestroy{


  constructor(private galleryService: GalleryService) {}



  gallery : Gallery[] = []
  displayData : GalleryTile [] = []
  containerStyles ={
    // 'display' : 'absolute',
    // 'justify-content': 'center',
    // 'background-color': 'red',
  }
  subscriptions : Subscription[] = [];

  ngOnInit(): void {
    this.subscriptions.push( this.galleryService.getGallery().pipe(
      first(),
      tap(),
      switchMap(rawData => this.getImgGridData(rawData))).subscribe(data => {
      this.gallery = data
      this.filterData(this.gallery)
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe()
    })
  }


  async getImgGridData(data : any) {
    return data
  }

  filterData(data : Gallery[]) {
    this.displayData = data.map(mastePiece => {
      return {
        image:mastePiece.images.thumbnail,
        title:mastePiece.name,
        name:mastePiece.artist.name
    }
    })
    // console.log(this.displayData)
  }

  options: NgxMasonryOptions = {
    resize: true,
    columnWidth: 146,
    gutter: 35,
    fitWidth: true,
    horizontalOrder: true,
  };
}
