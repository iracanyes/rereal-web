import {AppNode} from "@shared/core/enum/app.node";
import {Routes} from "@angular/router";

export const securityRoutes: Routes = [
  {
    path: 'login',
    redirectTo: AppNode.SIGN_IN,
    pathMatch: 'full',
  },
  {
    path: 'signin',
    redirectTo: AppNode.SIGN_IN,
    pathMatch: 'full',
  },
  {
    path: AppNode.SIGN_IN,
    loadComponent: () => import('@security/page/sign-in-page/sign-in-page.component')
      .then( c => c.SignInPage),
  }
];
