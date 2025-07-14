import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips'; // <-- Necesario

/**
 * @title Basic divider
 */
@Component({
  selector: 'app-mat-chip-set-seis',
  templateUrl: './mat-chip-set-seis.html',
  standalone: true,
  imports: [MatListModule, MatDividerModule, MatChipsModule], // <-- Agregado
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatBasicDividerSeisComponent {}
