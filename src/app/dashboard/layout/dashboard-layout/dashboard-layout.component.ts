import { Component } from '@angular/core';
import {HeaderMenuComponent, SidebarMenuComponent} from "@shared/ui/nav";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    HeaderMenuComponent,
    RouterOutlet,
    SidebarMenuComponent
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {

}
