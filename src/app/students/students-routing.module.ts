import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AddStundentComponent } from './add-stundent/add-stundent.component';
import { SearchStudentComponent } from './search-student/search-student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      { path: '', redirectTo: 'search' ,pathMatch: 'prefix'},
      {
        path: 'add',
        component: AddStundentComponent
      },
      {
        path: 'search',
        component: SearchStudentComponent
      },
      {
        path: 'enrol',
        loadChildren: () =>
          import('./enrol/enrol.module').then(m => m.EnrolModule)
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
