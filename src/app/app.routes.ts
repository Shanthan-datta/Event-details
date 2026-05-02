import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },

  {
    path: 'awards',
    loadComponent: () => import('./pages/awards/awards.component').then(m => m.AwardsComponent)
  },
  {
    path: 'directions',
    loadComponent: () => import('./pages/directions/directions.component').then(m => m.DirectionsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
