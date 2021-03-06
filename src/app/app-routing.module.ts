import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'app', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  { path: 'not-loggedin', loadChildren: () => import('./errors/not-loggedin/not-loggedin.module').then(m => m.NotLoggedinModule) },
  { path: 'not-found', loadChildren: () => import('./errors/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'server-error', loadChildren: () => import('./errors/server-error/server-error.module').then(m => m.ServerErrorModule) },
  { path: 'access-denied', loadChildren: () => import('./errors/access-denied/access-denied.module').then(m => m.AccessDeniedModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
