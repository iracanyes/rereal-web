import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AppNode} from "@shared/core/enum/app.node";

@Component({
  selector: 'app-fallback-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './fallback-page.component.html',
  styleUrl: './fallback-page.component.scss'
})
export class FallbackPageComponent {

  protected readonly AppNode = AppNode;
}
