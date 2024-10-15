import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss'
})
export class HelpPage {
  title = 'Rereal Web - Angular help page';
}
