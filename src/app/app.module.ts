import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { EditDialogComponent, AddDialogComponent, GatesInfoComponent } from './gates-info/gates-info.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { Routes, RouterModule } from '@angular/router'
import { NewServiceService } from './new-service.service';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
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
    EditDialogComponent,
    AddDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
