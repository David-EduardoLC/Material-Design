import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-mat-simple-form-field-ocho',
  templateUrl: './mat-simple-form-field-8.html',
  styleUrl: './mat-simple-form-field-8.css',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatSimpleFormFieldOcho {

}
