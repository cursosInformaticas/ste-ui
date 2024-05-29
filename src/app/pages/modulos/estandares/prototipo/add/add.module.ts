/**
 * @author Mateo Huancho
 * @email mhuanchom@gmail.com
 * @create date 2022-10-13
 * @modify date
 * @desc [Modularización]
 */
import { NgModule } from '@angular/core';
import { AddPagesModule } from './add.routing';
import { GlobalLibModule } from 'src/app/pages/commons/modules/global.module';
import { AddComponent } from './add.component';


@NgModule({
  declarations: [AddComponent],
  imports: [GlobalLibModule, AddPagesModule],
  exports: [],
})
export class AddModule {}
