import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentdetailsComponent} from './studentdetails/studentdetails.component';
import { HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'search',
    component: StudentdetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
