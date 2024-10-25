import {afterRender, Component, inject, signal} from '@angular/core';
import {AppNode} from "@shared/core/enum/app.node";
import {TitleCasePipe} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TokenService} from "@security/service";

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [
    TitleCasePipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {

  protected readonly AppNode = AppNode;
  profileMenuState = signal(false);

  openProfileMenu() {
    this.profileMenuState.set(!this.profileMenuState());
  }

  signOut(){
    // TODO: Implements sign-out
  }

}
