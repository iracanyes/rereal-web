import {afterRender, Component, inject, signal} from '@angular/core';
import {AppNode} from "@shared/core/enum/app.node";
import {TitleCasePipe} from "@angular/common";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {TokenService} from "@security/service";
import {Environment} from "@environment";

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
  private readonly router: Router = inject(Router);
  protected readonly AppNode = AppNode;
  profileMenuState = signal(false);

  openProfileMenu() {
    this.profileMenuState.set(!this.profileMenuState());
  }

  signOut(){
    // TODO: Implements sign-out
    localStorage.removeItem(Environment.TOKEN_KEY);
    //const router: Router = inject(Router);
    this.router.navigate(['/']);
  }

}
