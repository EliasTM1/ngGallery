import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintsDetailsComponent } from './paints-details/paints-details.component';



@NgModule({
  declarations: [
    PaintsDetailsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
