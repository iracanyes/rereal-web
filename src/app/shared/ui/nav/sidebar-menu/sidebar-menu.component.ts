import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AppNode} from "@shared/core/enum/app.node";

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {

  protected readonly AppNode = AppNode;
}
