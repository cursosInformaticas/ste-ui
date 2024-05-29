import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Angular Material */

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkTableModule} from '@angular/cdk/table';
import { MatSelectModule } from '@angular/material/select';

const materialModule = [
  /* Angular Material */
  CdkTableModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule,
  MatAutocompleteModule,
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatDialogModule,
  MatListModule,
  MatCheckboxModule,
  DragDropModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatCardModule,
  MatSelectModule,

];
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...materialModule],
})
export class MaterialModule {}
