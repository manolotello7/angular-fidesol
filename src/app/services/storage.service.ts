import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  clave: string;
  constructor() {
  }

  setClave(clave: string) {
    this.clave = clave;
  }

  getJson() {
    if (!this.clave) {
      return;
    }
    return JSON.parse(localStorage.getItem(this.clave));
  }

  setJson(datos: any) {
    if (!this.clave) {
      return;
    }
    localStorage.setItem(this.clave, JSON.stringify(datos));
  }

  delete() {
    if (!this.clave) {
      return;
    }
    localStorage.removeItem(this.clave);
  }

}
