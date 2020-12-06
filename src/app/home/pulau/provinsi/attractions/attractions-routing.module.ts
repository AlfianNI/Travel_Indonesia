import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttractionsPage } from './attractions.page';

const routes: Routes = [
  {
    path: '',
    component: AttractionsPage
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttractionsPageRoutingModule {}
