import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'acerca-de', loadChildren: './acerca-de/acerca-de.module#AcercaDePageModule' },
  { path: 'horas32', loadChildren: './horas32/horas32.module#Horas32PageModule' },
  { path: 'horas64', loadChildren: './horas64/horas64.module#Horas64PageModule' },
  { path: 'horas96', loadChildren: './horas96/horas96.module#Horas96PageModule' },
  { path: 'horas128', loadChildren: './horas128/horas128.module#Horas128PageModule' },
  { path: 'horas32ex', loadChildren: './horas32ex/horas32ex.module#Horas32exPageModule' },
  { path: 'horas64ex', loadChildren: './horas64ex/horas64ex.module#Horas64exPageModule' },
  { path: 'horas96ex', loadChildren: './horas96ex/horas96ex.module#Horas96exPageModule' },
  { path: 'horas128ex', loadChildren: './horas128ex/horas128ex.module#Horas128exPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
