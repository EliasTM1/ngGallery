import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridImageComponent } from './grid-image/grid-image.component';
import { DetailsCardComponent } from './details-card/details-card.component';
import { FullSizeImgComponent } from './full-size-img/full-size-img.component';
import { FlowFooterComponent } from './flow-footer/flow-footer.component';



@NgModule({
  declarations: [
    GridImageComponent,
    DetailsCardComponent,
    FullSizeImgComponent,
    FlowFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridImageComponent,
    DetailsCardComponent,
    FullSizeImgComponent,
    FlowFooterComponent
  ]
})
export class ComponentsModule { }
