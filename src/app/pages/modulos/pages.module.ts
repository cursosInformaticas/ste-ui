
/**
 * @author Mateo Huancho
 * @email mhuanchom@gmail.com
 * @create date 2022-10-13
 * @modify date
 * @desc [Modularización]
 */
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../commons/components/components.module';
import { MaterialModule } from '../commons/shared/material/material.module';
import { PagesComponent } from './pages.component';
import { GlobalLibModule } from '../commons/modules/global.module';
const appLib = [
  BrowserModule,
  //AppRoutingModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  ComponentsModule,
  HttpClientModule,
  MatSnackBarModule,
  CommonModule,
  MaterialModule

];

@NgModule({
  declarations: [PagesComponent],
  imports: [GlobalLibModule, ...appLib],
  exports: [PagesComponent,...appLib],
})
export class PagesModule {}
