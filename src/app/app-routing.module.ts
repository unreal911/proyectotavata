import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [

  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'**',component:NopagefoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    PagesRoutingModule,
    AuthRoutingModule
  ]
})
export class AppRoutingModule { }
