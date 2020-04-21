import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FruitListPage } from './fruit-list.page';

const routes: Routes = [
  {
    path: '',
    component: FruitListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitListPageRoutingModule {}
