import { Component } from '@angular/core';
import {CreateReportFormComponent} from "@reports/page/component/form/create-report-form/create-report-form.component";

@Component({
  selector: 'app-create-reports-page',
  standalone: true,
  imports: [
    CreateReportFormComponent
  ],
  templateUrl: './create-report-page.component.html',
  styleUrl: './create-report-page.component.scss'
})
export class CreateReportPageComponent {
  title: string = "Créer un rapport";
  subtitle: string = "Un problème partagé est un problème à moitié résolu";
}
