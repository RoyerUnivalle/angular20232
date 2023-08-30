import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEnrolComponent } from './new-enrol/new-enrol.component';
import { EnrolComponent } from './enrol.component';
import { EditEnrolComponent } from './edit-enrol/edit-enrol.component';

const routes: Routes = [
  {
    path: '',
    component: EnrolComponent,
    children: [
      { path: '', redirectTo: 'new-enrol' ,pathMatch: 'prefix'},
      {
        path: 'new-enrol',
        component: NewEnrolComponent
      },
      {
        path: 'edit-enrol',
        component: EditEnrolComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrolRoutingModule { }
