import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { NoLogInGuard } from './guard/no-log-in.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'log-in',
    loadChildren: './log-in/log-in.module#LogInPageModule',
    canActivate: [NoLogInGuard]

  },
  { path: 'sala4a', loadChildren: './page/sala4a/sala4a.module#Sala4aPageModule',canActivate: [AuthGuard]},
  { path: 'sala4b', loadChildren: './page/sala4b/sala4b.module#Sala4bPageModule', canActivate: [AuthGuard] },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
