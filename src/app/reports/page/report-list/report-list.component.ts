import { Component } from '@angular/core';
import {ClassicTableComponent} from "@shared/ui/table/classic-table/classic-table.component";
import {ReportTableComponent} from "@reports/page/component/table/report-table/report-table.component";

@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [
    ClassicTableComponent,
    ReportTableComponent
  ],
  templateUrl: './report-list.component.html',
  styleUrl: './report-list.component.scss'
})
export class ReportListComponent {
  title: string = 'Liste des rapports';
  subtitle: string = 'Liste de tous les rapports produits.';
}
