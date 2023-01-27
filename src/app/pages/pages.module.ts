import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintsDetailsComponent } from './paints-details/paints-details.component';



@NgModule({
  declarations: [
    PaintsDetailsComponent,
    GalleryGridComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    PaintsDetailsComponent,
    GalleryGridComponent
  ]
})
export class PagesModule { }
