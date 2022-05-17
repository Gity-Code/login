
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxDefaultOptions, MatCheckboxModule, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatListModule,
    ScrollingModule,
    MatNativeDateModule,
    

  ],
  exports: [

    MatTableModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatInputModule,
    MatListModule,
    ScrollingModule,
    MatRadioModule,
    MatNativeDateModule
  ],
  providers: [
     {provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],

})
export class MaterialModule { }
