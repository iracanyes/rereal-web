import { Routes } from "@angular/router";

export const ReportsRoutes: Routes = [
  {
    path: 'list',
    loadComponent: () => import('@reports/page/report-list/report-list.component')
      .then(c => c.ReportListComponent
      )
  },
  {
    path: 'create',
    loadComponent: () => import('@reports/page/create-reports-page/create-report-page.component')
      .then(c => c.CreateReportPageComponent)
  }
];
