import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  setToasterAddress(address: string): void {
    window.localStorage.setItem('toasterAddress', address);
  }

  getToasterAddress(): string {
    return window.localStorage.getItem('toasterAddress') || 'localhost';
  }

  setSetting(name, value): void {
    window.localStorage.setItem(name, value);
  }

  getSetting(name): any {
    return window.localStorage.getItem('name');
  }
}
