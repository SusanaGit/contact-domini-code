import { Routes, defaultUrlMatcher } from '@angular/router';

export const contactsRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/list.component').then(m => m.ListComponent)
  }
];

export default contactsRoute;
