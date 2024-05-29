/**
 * @author Mateo Huancho
 * @email mhuanchom@gmail.com
 * @create date 2022-10-13
 * @modify date
 * @desc [Lazy Loading mejorar el performance tener codigo mas limpio y cargar solo lo que necesito]
 */
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AddComponent } from './add.component';

const routes: Array<Route> = [
  {
    path: '',
    component: AddComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPagesModule {}
