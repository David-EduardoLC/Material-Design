import {Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-mat-basic-list-once',
  templateUrl: './mat-basic-list-11.html',
  styleUrl: './mat-basic-list-11.css',
    imports: [MatListModule],

})
export class MatBasicListOnce {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

}
