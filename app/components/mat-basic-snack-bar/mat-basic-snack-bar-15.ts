import {Component, inject} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-mat-basic-snack-bar-quince',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './mat-basic-snack-bar-15.html',
  styleUrl: './mat-basic-snack-bar-15.css'
})
export class MatBasicSnackBarQuince {
private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
