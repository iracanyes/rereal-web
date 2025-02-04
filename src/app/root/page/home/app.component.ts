import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderMenuComponent} from "@shared/ui/nav/header-menu/header-menu.component";
import {SidebarMenuComponent} from "@shared/ui/nav";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderMenuComponent, SidebarMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EuroSkyeStarr Rereal';
}
