import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { Error404Component } from './error404/error404.component';
import { ShowUserComponent } from './show-user/show-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { 
        path: '', 
        component: CreateUserComponent 
      },
      {
        path: 'users',
        component: ShowUserComponent,
      },
    ],
    
  },
  {
    path:'**',
    component:Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
