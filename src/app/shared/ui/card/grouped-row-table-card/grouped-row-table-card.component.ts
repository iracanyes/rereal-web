import { Component } from '@angular/core';
import {GroupedRowTableComponent} from "@shared/ui/table";

@Component({
  selector: 'app-grouped-row-table-card',
  standalone: true,
  imports: [
    GroupedRowTableComponent
  ],
  templateUrl: './grouped-row-table-card.component.html',
  styleUrl: './grouped-row-table-card.component.scss'
})
export class GroupedRowTableCardComponent {

}
