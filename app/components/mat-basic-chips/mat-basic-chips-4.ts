import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

/**
 * @title Basic chips
 */
@Component({
  selector: 'app-mat-basic-chips-cuatro',
  standalone: true,
  templateUrl: './mat-basic-chips-4.html',
  imports: [MatChipsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatBasicsChipsCuatroComponent {}

