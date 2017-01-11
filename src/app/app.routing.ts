import { RouterModule, Routes } from '@angular/router';

import {
  GalleryGuard,
  ProfileGuard
} from './guards';

import {
  SidebarPageComponent,
  DetailPageComponent,
  GalleryDetailPageComponent
} from './pages';

const settings = require('./settings/config.json');

const routes: Routes = [
  {
    path: 'set',
    redirectTo: ''
  },
  {
    path: '',
    component: settings.theme.sidebar ? SidebarPageComponent : GalleryDetailPageComponent,
    canActivate: [ProfileGuard]
  },

  {
    path: 'set/:id',
    component: DetailPageComponent,
    canActivate: [ProfileGuard]
  }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
