import { Routes } from '@angular/router';
import { TeklifComponent } from './teklif/teklif';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./anasayfa/anasayfa').then(m => m.AnasayfaComponent)
  },
  {
    path: 'teklif',
    component: TeklifComponent
  },
  {
    path: 'hakkimizda',
    loadComponent: () => import('./hakkimizda/hakkimizda').then(m => m.HakkimizdaComponent)
  },
  {
    path: 'satilik-konut',
    loadComponent: () => import('./satilik-konut/satilik-konut').then(m => m.SatilikKonutComponent)
  },
  {
    path: 'kiralik-konut',
    loadComponent: () => import('./kiralik-konut/kiralik-konut').then(m => m.KiralikKonutComponent)
  },
  {
    path: 'ticari-gayrimenkul',
    loadComponent: () => import('./ticari-gayrimenkul/ticari-gayrimenkul').then(m => m.TicariGayrimenkulComponent)
  },
  {
    path: 'iletisim',
    loadComponent: () => import('./iletisim/iletisim').then(m => m.IletisimComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
