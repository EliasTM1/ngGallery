import { GalleryTile } from './../../../interfaces/mockData.interface';
import { Component, Input, OnInit } from '@angular/core';
import { first, tap, switchMap } from 'rxjs';
import { GalleryService } from '../../services/gallery.service';
import { Gallery } from '../../../interfaces/mockData.interface';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss']
})
export class GalleryGridComponent implements OnInit {


  constructor(private galleryService: GalleryService) {}

  gallery : Gallery[] = []
  displayData : GalleryTile [] = []
  containerStyles ={
    // 'display' : 'absolute',
    // 'justify-content': 'center',
    // 'background-color': 'red',
  }

  ngOnInit(): void {
    this.galleryService.getGallery().pipe(
      first(),
      tap(),
      switchMap(rawData => this.getImgGridData(rawData))).subscribe(data => {
      this.gallery = data
      this.filterData(this.gallery)
    })
  }

  async getImgGridData(data : any) {
    return data
  }

  filterData(data : Gallery[]) {
    console.warn(data)
    this.displayData = data.map(mastePiece => {
      return {
        image:mastePiece.images.thumbnail,
        title:mastePiece.name,
        name:mastePiece.artist.name
    }
    })
    console.log(this.displayData)
  }

  options: NgxMasonryOptions = {
    resize: true,
    columnWidth: 146,
    gutter: 35,
    fitWidth: true,
    horizontalOrder: true,
  };
}
