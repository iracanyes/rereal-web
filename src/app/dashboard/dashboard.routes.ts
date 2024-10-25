import {AppNode} from "@shared/core/enum/app.node";
import {Routes} from "@angular/router";

export const DashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('@dashboard/page/dashboard-home-page/dashboard-home-page.component')
      .then(c => c.DashboardHomePage),
  }
];
