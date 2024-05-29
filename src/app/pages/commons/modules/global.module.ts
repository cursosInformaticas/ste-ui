import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../shared/material/material.module';


const globalImport = [
  CommonModule,
  RouterModule,
  ComponentsModule,
  MaterialModule,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule
  /* download files */
];

const globalImports = [
  CommonModule,
  RouterModule,
  ComponentsModule,
  MaterialModule,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
  /* download files */
];
@NgModule({
  declarations: [],
  imports: [...globalImport],
  exports: [...globalImports],
})
export class GlobalLibModule {}
