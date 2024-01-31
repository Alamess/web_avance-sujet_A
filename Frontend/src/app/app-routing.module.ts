import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './views/form1/form1.component';
import { Form2Component } from './views/form2/form2.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:"sign_up",component:SignUpComponent},
  {path:'home',canActivate:[AuthGuardService],component:HomeComponent},
  {path:"form1",canActivate:[AuthGuardService],component:Form1Component},
  {path:"form2",canActivate:[AuthGuardService],component:Form2Component},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
