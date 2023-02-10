import { RouterModule } from '@angular/router';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintsDetailsComponent } from './paints-details/paints-details.component';
import { SharedModule } from '../shared/shared.module';
import { NgxMasonryModule } from 'ngx-masonry';



@NgModule({
  declarations: [
    PaintsDetailsComponent,
    GalleryGridComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxMasonryModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    PaintsDetailsComponent,
    GalleryGridComponent
  ]
})
export class PagesModule { }
