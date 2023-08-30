import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { AddStundentComponent } from './add-stundent/add-stundent.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { StudentsComponent } from './students/students.component';


@NgModule({
  declarations: [
    AddStundentComponent,
    SearchStudentComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
