import {Component} from '@angular/core';
import {SignInFormComponent} from "@shared/ui/form";

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [
    SignInFormComponent,
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss'
})
export class SignInPage {
  title: string = 'Welcome to EuroSkyeStarr Euro-Rereal';
  subTitle: string = 'Identifiez-vous  et accéder à la plateforme';
}
