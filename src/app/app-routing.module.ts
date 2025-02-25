import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component:HomeComponent, pathMatch: 'full',
  },

  {
    path: 'home', component:HomeComponent,
  },

  {
    path: 'login', component:LoginComponent,
  },

  {
    path: 'registration', component:RegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
