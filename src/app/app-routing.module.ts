import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home1/home1.module').then(m => m.Home1Module) }, 
  { path: 'sign-in', loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'promo', loadChildren: () => import('./pages/promo/promo.module').then(m => m.PromoModule) },
  { path: 'home1', loadChildren: () => import('./pages/home1/home1.module').then(m => m.Home1Module) },
  { path: 'home2', loadChildren: () => import('./pages/home2/home2.module').then(m => m.Home2Module) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
