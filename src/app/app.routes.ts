import { Routes } from '@angular/router';
import { PageLayout } from './layout';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  {
    path: '', component: PageLayout, children: [
      {path: '', component: HomePage},
    ],
  },
];
