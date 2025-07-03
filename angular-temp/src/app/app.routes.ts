import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Suggestions } from './pages/suggestions/suggestions';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'suggestions', component: Suggestions }
];