import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionComponent } from './pages/promotion/promotion.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import { UserinfoComponent } from './pages/user/user.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home1/home1.module').then(m => m.Home1Module) }, 
  { path: 'home1', loadChildren: () => import('./pages/home1/home1.module').then(m => m.Home1Module) },
  { path: 'promotion', component: PromotionComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'user', component: UserinfoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
