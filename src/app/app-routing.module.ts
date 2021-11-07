import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentdetailsComponent} from './studentdetails/studentdetails.component';


const routes: Routes = [
  {path: 'search', component: StudentdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
