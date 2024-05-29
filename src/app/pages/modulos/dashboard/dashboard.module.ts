/**
 * @author Mateo Huancho
 * @email mhuanchom@gmail.com
 * @create date 2022-10-13
 * @modify date
 * @desc [Modularización]
 */
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { GlobalLibModule } from '../../commons/modules/global.module';
import { DashboardPagesModule } from './dashboard.routing';

@NgModule({
  declarations: [DashboardComponent],
  imports: [GlobalLibModule, DashboardPagesModule],
  exports: []
})
export class DashboardModule { }
