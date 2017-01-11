import { RouterModule, Routes } from '@angular/router';

import { ProfileGuard } from './guards';

import {
  DetailComponent,
  GalleryComponent
} from './pages';

const routes: Routes = [
  { path: 'set', redirectTo: '' },
  { path: '', component: GalleryComponent, canActivate: [ProfileGuard] },
  { path: 'set/:id', component: DetailComponent, canActivate: [ProfileGuard] }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
