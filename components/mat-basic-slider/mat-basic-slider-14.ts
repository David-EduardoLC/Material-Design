import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-mat-basic-slider-catorce',
  imports: [MatSliderModule],
  templateUrl: './mat-basic-slider-14.html',
  styleUrl: './mat-basic-slider-14.css'
})
export class MatBasicSliderCatorce {
formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
