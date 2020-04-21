import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reactive-form',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'template-driven-form',
    loadChildren: () => import('./pages/template-driven-form/template-driven-form.module').then(m => m.TemplateDrivenFormPageModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./pages/reactive-form/reactive-form.module').then(m => m.ReactiveFormPageModule)
  },
  {
    path: 'fruits',
    loadChildren: () => import('./pages/fruit-list/fruit-list.module').then(m => m.FruitListPageModule)
  },
  {
    path: 'fruits/:id',
    loadChildren: () => import('./pages/fruit-details/fruit-details.module').then(m => m.FruitDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
