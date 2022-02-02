import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/auth', pathMatch: 'full'
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./pages/reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
