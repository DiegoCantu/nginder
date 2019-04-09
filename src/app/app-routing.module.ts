import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/Login',
    pathMatch: 'full'
  },
  {
    path: 'Register',
    component: RegisterComponent
  },
  {
    path: 'PasswordRecovery',
    component: PasswordRecoveryComponent
  },
  {
    path: 'Home/:id',
    component: HomeComponent
  },
  {
    path: 'Edit',
    component: EditComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
