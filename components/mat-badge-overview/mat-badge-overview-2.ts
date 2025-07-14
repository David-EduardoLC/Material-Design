import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

/**
 * @title Badge overview
 */
@Component({

selector: 'app-mat-badge-overview-dos',
  standalone: true,
  templateUrl: './mat-badge-overview-2.html',
  styleUrl: './mat-badge-overview-2.css',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
})
export class MatBadgeOverviewDosComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
