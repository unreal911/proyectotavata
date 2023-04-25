import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';
import { ChathelpComponent } from './chathelp/chathelp.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    SearchComponent,
    ChathelpComponent,
    OffcanvasComponent,
    NavbartopComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    SearchComponent,
    ChathelpComponent,
    OffcanvasComponent,
    NavbartopComponent
  ]
})
export class SharedModule { }
