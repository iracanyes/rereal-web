import { Component } from '@angular/core';
import {SidebarMenuComponent} from "@shared/ui/nav";
import {DoughnutChartComponent} from "@shared/ui/charts";
import {
  AvailabilityResumeCardComponent,
  DashboardResumeCardComponent,
  DoughnutChartCardComponent, GroupedRowTableCardComponent,
  PieChartCardComponent,
  ReportResumeChartComponent
} from "@shared/ui/card";

@Component({
  selector: 'app-dashboard-home-page',
  standalone: true,
  imports: [
    SidebarMenuComponent,
    DoughnutChartComponent,
    DashboardResumeCardComponent,
    PieChartCardComponent,
    ReportResumeChartComponent,
    DoughnutChartCardComponent,
    AvailabilityResumeCardComponent,
    GroupedRowTableCardComponent
  ],
  templateUrl: './dashboard-home-page.component.html',
  styleUrl: './dashboard-home-page.component.scss'
})
export class DashboardHomePage {

}
