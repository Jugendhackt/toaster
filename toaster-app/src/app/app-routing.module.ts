import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './tabs/home/home.component';
import { ManualControlComponent } from './tabs/manual-control/manual-control.component';
import { SettingsComponent } from './tabs/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'manual', component: ManualControlComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
