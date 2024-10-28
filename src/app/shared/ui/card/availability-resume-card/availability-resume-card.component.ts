import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AppNode} from "@shared/core/enum";

@Component({
  selector: 'app-availability-resume-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './availability-resume-card.component.html',
  styleUrl: './availability-resume-card.component.scss'
})
export class AvailabilityResumeCardComponent {

  protected readonly AppNode = AppNode;
}
