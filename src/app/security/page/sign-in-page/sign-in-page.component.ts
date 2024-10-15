import { Component } from '@angular/core';
import {SignInFormComponent} from "@shared/ui/form";
import {FormGroup} from "@angular/forms";
import {SignInFormDto} from "@security/model/dto";

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
  title = 'Sign In';
  loginFormGroup: FormGroup<SignInFormDto>;
}
