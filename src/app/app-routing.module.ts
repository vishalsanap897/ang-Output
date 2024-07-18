import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { StafComponent } from './staf/staf.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'staf',
    component:StafComponent
  },
  {
  path:'profile',
  component:ProfileComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
