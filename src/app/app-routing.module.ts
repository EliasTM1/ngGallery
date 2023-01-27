import { DetailsCardComponent } from './components/details-card/details-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryGridComponent } from './pages/gallery-grid/gallery-grid.component';

// Import the components that you want to use as routes

const routes: Routes = [
  {
    path: '',
    component: GalleryGridComponent,
  },
  {
    path: 'details',
    component: DetailsCardComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
