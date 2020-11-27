import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { GatesInfoComponent } from './gates-info/gates-info.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { Routes, RouterModule } from '@angular/router'
import { NewServiceService } from './new-service.service';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  {path: 'home', component : TopMenuComponent},
  {path: 'gatesinfo', component : GatesInfoComponent},
  {path: 'notifications', component : NotificationsListComponent},
  {path: 'mainpage', component : HomePageComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    GatesInfoComponent,
    NotificationsListComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
