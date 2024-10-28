import { Routes } from '@angular/router';
import {AppNode} from "@shared/core/enum/app.node";
import {DashboardGuard} from "@dashboard/guard/dashboard.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: AppNode.REDIRECT_TO_LOGIN,
    pathMatch: 'full',
  },
  {
    path: AppNode.SECURITY,
    loadChildren: () => import('@security/security.routes')
      .then(r => r.securityRoutes)
  },
  {
    path: AppNode.AUTHENTICATED,
    canActivate: [DashboardGuard(AppNode.REDIRECT_TO_LOGIN)],
    loadChildren: () => import('@dashboard/dashboard.routes')
      .then( r => r.DashboardRoutes)
  },
  {
    path: AppNode.REPORTS,
    canActivate: [DashboardGuard(AppNode.REDIRECT_TO_LOGIN)],
    loadChildren: () => import('@reports/reports.routes')
      .then( r => r.ReportsRoutes)
  },
  {
    path: 'help',
    loadComponent: () => import('@root/page/help/help.component')
      .then(c => c.HelpPage),
  },
  {
    path: AppNode.FALLBACK,
    loadComponent: () => import('@root/page/fallback-page/fallback-page.component')
      .then(c => c.FallbackPageComponent )
  }
];
