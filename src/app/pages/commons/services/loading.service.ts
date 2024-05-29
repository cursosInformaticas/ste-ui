import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public loading = false;
  public loadingDelete = false;
  public loadingVersionar = false;

  constructor() {}

  enableLoading() {
    this.loading = true;
  }
  enableVersionarLoading() {
    this.loadingVersionar = true;
  }
  enableDeleteLoading() {
    this.loadingDelete = true;
  }
  disableLoading() {
    this.loading = false;
  }
  disableDeleteLoading() {
    this.loadingDelete = false;
  }
  disableVersionarLoading() {
    this.loadingVersionar = false;
  }



}
