import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-classic-table',
  standalone: true,
  imports: [],
  templateUrl: './classic-table.component.html',
  styleUrl: './classic-table.component.scss'
})
export class ClassicTableComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;


}
