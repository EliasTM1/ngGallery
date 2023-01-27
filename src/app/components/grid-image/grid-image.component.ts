import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { Gallery } from 'src/interfaces/mockData.interface';

@Component({
  selector: 'app-grid-image',
  templateUrl: './grid-image.component.html',
  styleUrls: ['./grid-image.component.scss']
})
export class GridImageComponent implements OnInit {

  constructor(private galleryService: GalleryService) {}

  data : Gallery[] = []
  SOME : any

  ngOnInit(): void {
    this.galleryService.getJSON().subscribe(subscription => {
      console.log(subscription, "SUBD")
    })
  }

}
