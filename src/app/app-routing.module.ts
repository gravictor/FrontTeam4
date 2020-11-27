import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopMenuComponent} from './top-menu/top-menu.component';
import { GatesInfoComponent } from './gates-info/gates-info.component';

const routes: Routes = [
  { path: 'home', component: TopMenuComponent },
  { path: 'gatesinfo', component: GatesInfoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
