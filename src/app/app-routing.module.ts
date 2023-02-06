import { PaintsDetailsComponent } from './pages/paints-details/paints-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryGridComponent } from './pages/gallery-grid/gallery-grid.component';

// Import the components that you want to use as routes

const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryGridComponent,
  },
  {
    path: 'details/:id',
    component: PaintsDetailsComponent,
  },
  {
    path: '**',
    redirectTo: 'gallery',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
