import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
