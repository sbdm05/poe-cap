import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { PageForgotPasswordComponent } from './login/pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/pages/page-sign-up/page-sign-up.component';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  // ici on va définir les routes
  // { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  // { path: 'sign-in', component: PageSignInComponent },
  // autres routes pour sign-up, reset-password, forgot-password
  // { path: 'sign-up', component: PageSignUpComponent },
  // { path: 'reset-password', component: PageResetPasswordComponent },
  // { path: 'forgot-password', component: PageForgotPasswordComponent },
  // { path: 'orders', component: PageListOrdersComponent },

  // mise en pace du lazy loading

  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  // orders path: 'orders'
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  // clients path : 'clients'

  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  // page-not-found ** + tester dans le navigateur - wildcard
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

/* avec preloading strategy, tous les modules se chargent
  dès que le navigateur le peut
*/

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  // console.log des routes [routes]
  constructor(private router: Router) {
    // console.log(this.router.config, 'tableau de routes');
  }
}
