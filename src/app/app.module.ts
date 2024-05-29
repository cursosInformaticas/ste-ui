
import { Routes, RouterModule } from '@angular/router';
/**
 * @author Mateo Huancho
 * @email mhuanchom@gmail.com
 * @create date 2022-10-13
 * @modify date
 * @desc [Modularización]
 */
import {
  registerLocaleData,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';

import { NgModule, LOCALE_ID, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import es from '@angular/common/locales/es';
registerLocaleData(es);
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './pages/modulos/not-found-page/not-found-page.component';
import { PagesModule } from './pages/modulos/pages.module';
import { PagesRoutingModule } from './pages/commons/routers/global.routing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [AppComponent, NotFoundPageComponent],
  imports: [PagesModule, PagesRoutingModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [


     { provide: LOCALE_ID, useValue: 'es' },
     { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
  ) {

   // this.connectionService.getConnectionStatus();
  }

}

