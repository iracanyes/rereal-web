import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ApiService} from "@api/service";
import {ApiNode} from "@api/enum/api-node.enum";
import {isNil} from "lodash";
import {Router} from "@angular/router";
import {AppNode} from "@shared/core/enum";
import {ApiCodeResponse} from "@api/enum/api-code.response";

@Component({
  selector: 'app-create-report-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-report-form.component.html',
  styleUrl: './create-report-form.component.scss'
})
export class CreateReportFormComponent {
  private readonly api: ApiService = inject(ApiService);
  private readonly router: Router = inject(Router);

  myform: FormGroup = new FormGroup({
    type: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    additional_info: new FormControl('', [Validators.required]),
    application_id: new FormControl('', []),
    equipment_id: new FormControl('', []),
  });

  createReport() {
    console.log("Create Report before");
    console.log(this.myform.value);

    this.api.post(ApiNode.CREATE_REPORT, this.myform.value).subscribe((res) => {
      console.log("Create Report success");
      console.log(res);

      if(!isNil(res.data) && res.code === ApiCodeResponse.COMMON_SUCCESS) {

        this.router.navigateByUrl('/' + AppNode.REPORTS).then();
      }
    });
  }
}
