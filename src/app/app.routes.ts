import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.page').then((m) => m.AccountPage),
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}