// #regin IMPORT
/**
 * @author Mateo Huancho
 * @email mhuanchom@gmail.com
 * @create date 2022-10-13
 * @modify date
 * @desc [Lazy Loading mejorar el performance tener codigo mas limpio y cargar solo lo que necesito]
 */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagesComponent } from '../../modulos/pages.component';
// #regin CONSTANTE
const routes: Routes = [

  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../modulos/dashboard/dashboard.module')
          .then(m => m.DashboardModule)
      },

      /**
       *@name Componente plan de inversiones
       *@create date 2022-10-13
       */

            /**
   *@name Componente estandares prototipo
   *@create date 2024-05-23
   */

  {
    path: 'estandaresdetalle',
    loadChildren: () => import('../../modulos/estandares/prototipo/detalle/detalle.module')
      .then(m => m.DetalleModule)
  },
  {
    path: 'addestandar',
    loadChildren: () => import('../../modulos/estandares/prototipo/add/add.module')
      .then(m => m.AddModule)
  },
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { preloadingStrategy: PreloadAllModules}, //, useHash: true
    )
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

