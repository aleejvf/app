import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'index-uc',
    loadChildren: () => import('./pages/index-uc/index-uc.module').then( m => m.IndexUcPageModule)
  },
  {
    path: '',
    redirectTo: 'index-uc',
    pathMatch: 'full'
  },
  
 
  {
    path: 'viajes-us',
    loadChildren: () => import('./pages/viajes-us/viajes-us.module').then( m => m.ViajesUsPageModule)
  },
 
  
  {
    path: 'info-uc',
    loadChildren: () => import('./pages/info-uc/info-uc.module').then( m => m.InfoUcPageModule)
  },
  
  /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
  
  
 
  {

    path: 'vehicle-form',
    loadChildren: () => import('./pages/vehicle-form/vehicle-form.module').then( m => m.VehicleFormPageModule)
  },
  {
    path: 'historial-conductor',
    loadChildren: () => import('./pages/historial-conductor/historial-conductor.module').then( m => m.HistorialConductorPageModule)
  },
  {
    path: 'configuracion-vehiculo',
    loadChildren: () => import('./pages/configuracion-vehiculo/configuracion-vehiculo.module').then( m => m.ConfiguracionVehiculoPageModule)
  },
  {
    path: 'confi-vehiculo',
    loadChildren: () => import('./pages/confi-vehiculo/confi-vehiculo.module').then( m => m.ConfiVehiculoPageModule)
  },
 
  {
    path: 'verificacion-uc',
    loadChildren: () => import('./pages/verificacion-uc/verificacion-uc.module').then( m => m.VerificacionUcPageModule)
  },
  {
    path: 'soli-aceptada-uc',
    loadChildren: () => import('./pages/soli-aceptada-uc/soli-aceptada-uc.module').then( m => m.SoliAceptadaUcPageModule)
  },
  {
    path: 'soli-denegada-uc',
    loadChildren: () => import('./pages/soli-denegada-uc/soli-denegada-uc.module').then( m => m.SoliDenegadaUcPageModule)
  },
 
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
