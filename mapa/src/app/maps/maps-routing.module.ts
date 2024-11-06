import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { MarkesPageComponent } from './pages/markes-page/markes-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutComponent,  
    children: [
      { path: 'fullscreen', component: FullScreenPageComponent }, // Corrected 'Component'
      { path: 'zoom-range', component: ZoomRangePageComponent },  // Corrected 'Component'
      { path: 'markers', component: MarkesPageComponent },        // Corrected 'Component'
      { path: 'properties', component: PropertiesPageComponent }, // Corrected 'Component'
      { path: '**', redirectTo: 'fullscreen' },                   // Corrected 'redirecTo'
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
