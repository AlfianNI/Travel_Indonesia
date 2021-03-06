import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodsPage } from './foods.page';

const routes: Routes = [
  {
    path: '',
    component: FoodsPage
  },
  {
    path: ':fId',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodsPageRoutingModule {}
