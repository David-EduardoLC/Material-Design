import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

/**
 * @title Badge overview
 */
@Component({
  selector: 'app-mat-badge-overview',
  standalone: true,
  templateUrl: './mat-badge-overview.html',
  styleUrl: './mat-badge-overview.css',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
})
export class MatBadgeOverviewComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
