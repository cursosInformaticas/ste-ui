/**
 * @author Mateo Huancho
 * @email mhuanchom@gmail.com
 * @create date 2022-10-13
 * @modify date
 * @desc [Modularización]
 */
import { NgModule } from '@angular/core';
import { GlobalLibModule } from 'src/app/pages/commons/modules/global.module';

import { DetalleComponent } from './detalle.component';
import { DetallePagesModule } from './detalle.routing';



@NgModule({
  declarations: [DetalleComponent],
  imports: [GlobalLibModule, DetallePagesModule],
  exports: []
})
export class DetalleModule {}
