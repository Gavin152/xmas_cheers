import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/christmas/christmas.module').then(m => m.ChristmasModule)
  }
];
