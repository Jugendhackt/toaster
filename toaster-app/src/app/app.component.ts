import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabs: Object[] = [
    { name: 'Home', icon: 'home', path: 'home' },
    { name: 'Manuelle Steuerung', icon: 'build', path: 'manual' },
    { name: 'Einstellungen', icon: 'settings', path: 'settings' }
  ];

  constructor(private router: Router) {

  }

  navigate(path): void {
    this.router.navigateByUrl(path);
  }
}
