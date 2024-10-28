import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MinimpaComponent } from './components/minimpa/minimpa.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkesPageComponent } from './pages/markes-page/markes-page.component';


@NgModule({
  declarations: [
    MinimpaComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkesPageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ] 
})
export class MapsModule { }
