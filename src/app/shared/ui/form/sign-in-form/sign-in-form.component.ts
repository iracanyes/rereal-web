import {afterRender, Component, inject, PLATFORM_ID} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SignInFormDto} from "@security/model/dto";
import {ApiService} from "@api/service/api.service";
import {FormError} from "@shared/ui/form/types";
import {getFormValidationErrors} from "@shared/ui/form/utils";
import {ApiNode} from "@api/enum/api-node.enum";
import {ApiResponse} from "@api/types/api.response";
import {CommonModule, isPlatformBrowser, NgIf} from "@angular/common";
import {isNil} from "lodash";
import {Environment} from "@environment";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {AppNode} from "@shared/core/enum/app.node";
import {TokenService} from "@security/service";

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf, RouterModule],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss'
})
export class SignInFormComponent {
  title = 'Sign In';
  loginFormGroup: FormGroup<SignInFormDto>;
  private readonly api: ApiService = inject(ApiService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly tokenService: TokenService = inject(TokenService);
  private readonly router: Router = inject(Router);

  constructor() {
    this.loginFormGroup = new FormGroup<SignInFormDto>(<SignInFormDto>{
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', [Validators.required]),

    });
  }

  error(){
    let result : FormError[] = [];

    result = getFormValidationErrors(this.loginFormGroup);
    return result;
  }

  get(key: string){
    return this.loginFormGroup.get(key) as FormControl<any>;
  }

  signIn() {
    this.api.post(ApiNode.SIGN_IN, this.loginFormGroup.value)
      .subscribe((result: ApiResponse) => {
        console.debug('Sign In result', JSON.stringify(result));


        if(!isNil(result.data) && result.data.token.length > 0){
          console.debug('localStorage exists: ', !isNil(localStorage));
          if(!isNil(localStorage)){
            //localStorage.setItem(Environment.TOKEN_KEY, JSON.stringify(result.data));
            this.tokenService.setToken(result.data);
            // Redirect to previous route
            const previousUrl = this.route.snapshot.queryParams['previous'] || '/'+AppNode.AUTHENTICATED;

            console.debug('previous url: ', previousUrl);
            console.debug('sign-in form - localStorage', localStorage);

            this.router.navigate([previousUrl]).then();
          }
        }else{
          // Afficher un message d'erreur
        }
      });

  }
}
