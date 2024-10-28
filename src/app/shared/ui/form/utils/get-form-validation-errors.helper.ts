import {FormGroup} from "@angular/forms";
import {FormError, GetAllFormErrorsFn} from "@shared/ui/form/types";

export const getFormValidationErrors: GetAllFormErrorsFn = (form: FormGroup  ) => {
  let result : FormError[] = [];

  Object.keys(form.controls).forEach(key => {
    const controlErrors = form.get(key)?.errors;

    if( controlErrors ){
      Object.keys(controlErrors).forEach(keyError => {
        result.push({
          control: key,
          error: keyError,
          value: controlErrors[keyError]
        });
      })
    }
  });

  return result;
};
