import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '', component: LoginFormComponent
  },
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'users/:email', component: DetailComponent
  },
  // {
  //   path: 'not-authorized',
  //   component: NotAuthorizedComponent
  // },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
