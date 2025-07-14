import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatAutocompleteUnoComponent } from './components/mat-autocomplete/mat-autocomplete-1';
import { MatBadgeOverviewDosComponent  } from './components/mat-badge-overview/mat-badge-overview-2';
import { MatBasicsCheckboxesTresComponent } from './components/mat-basic-checkboxes/mat-basic-checkboxes-3';
import { MatBasicsChipsCuatroComponent } from './components/mat-basic-chips/mat-basic-chips-4';
import { MatBasicDatepickerCincoComponent } from './components/mat-basic-datepicker/mat-basic-datepicker-cinco';
import { MatBasicDividerSeisComponent  } from './components/mat-chip-set/mat-chip-set-seis';
import { MatBasicExpansionPanelSiete } from './components/mat-basic-expansion-panel/mat-basic-expansion-panel-siete';
import { MatSimpleFormFieldOcho } from './components/mat-simple-form-field/mat-simple-form-field-8';
import { MatBasicIconsNueve } from './components/mat-basic-icons/mat-basic-icons-9';
import { MatBasicInputsDiez } from './components/mat-basic-inputs/mat-basic-inputs-10';
import { MatBasicListOnce } from './components/mat-basic-list/mat-basic-list-11';
import { MatIndeterminateProgressBarDoce } from './components/mat-indeterminate-progress-bar/mat-indeterminate-progress-bar-12';
import { MatBasicRadiosTrece } from './components/mat-basic-radios/mat-basic-radios-13';
import { MatBasicSliderCatorce } from './components/mat-basic-slider/mat-basic-slider-14';
import { MatBasicSnackBarQuince } from './components/mat-basic-snack-bar/mat-basic-snack-bar-15';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatAutocompleteUnoComponent,
            MatBadgeOverviewDosComponent,
            MatBasicsCheckboxesTresComponent,
            MatBasicsChipsCuatroComponent,
            MatBasicDatepickerCincoComponent,
            MatBasicDividerSeisComponent ,
            MatBasicExpansionPanelSiete,
            MatSimpleFormFieldOcho,
            MatBasicIconsNueve,
            MatBasicInputsDiez,
            MatBasicListOnce,
            MatIndeterminateProgressBarDoce,
            MatBasicRadiosTrece,
            MatBasicSliderCatorce,
            MatBasicSnackBarQuince],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'projectmaterial';
}
