import {FormControl} from "@angular/forms";

/**
 * This interface is the Data Transfer object
 * used within the Login Form
 */
export interface SignInFormDto {
  email: FormControl<string>;
  password: FormControl<string>;
}
