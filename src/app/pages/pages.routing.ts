import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../guards/auth.guard';
//import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    path: 'dashboard',
    component: PagesComponent,
    loadChildren: () => import('./pages-routing.module').then(m => m.PagesRoutingModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

