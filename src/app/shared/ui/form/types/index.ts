import {FormGroup} from "@angular/forms";

export interface FormError {
  control: string;
  value: any;
  error: string;
}


export type GetAllFormErrorsFn = (form: FormGroup) => FormError[];

