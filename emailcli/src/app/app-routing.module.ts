import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmailFormComponent} from "./email-form/email-form.component";


const routes: Routes = [
  { path: 'users', component: EmailFormComponent },
  /*{
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
