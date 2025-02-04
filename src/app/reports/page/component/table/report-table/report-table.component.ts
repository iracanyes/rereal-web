import {Component, inject, Input, OnInit, signal, WritableSignal} from '@angular/core';
import {ApiService} from "@api/service";
import {ApiNode} from "@api/enum/api-node.enum";
import {catchError, of, tap} from "rxjs";
import {ApiCodeResponse} from "@api/enum/api-code.response";
import {isNil} from "lodash";
import { Report } from "@reports/model/dto/report.dto";
import {DatePipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AppNode} from "@shared/core/enum";

@Component({
  selector: 'app-report-table',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './report-table.component.html',
  styleUrl: './report-table.component.scss'
})
export class ReportTableComponent implements OnInit {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
  $reports: WritableSignal<Report[]> = signal([]);
  private readonly api: ApiService = inject(ApiService);

  ngOnInit() {
    this.api.get(ApiNode.REPORT_LIST).pipe(
      tap((res) => {
        console.log("Api response success!");
        console.debug(res);
        if(res.code === ApiCodeResponse.COMMON_SUCCESS && !isNil(res.data)){
          this.$reports.set(res.data);
        }
      }),
      catchError((err, caught) => {
        return of(err.message);
      })
    ).subscribe();
  }

  protected readonly AppNode = AppNode;
}
