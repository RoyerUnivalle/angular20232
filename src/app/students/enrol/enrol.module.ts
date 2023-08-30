import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrolRoutingModule } from './enrol-routing.module';
import { EnrolComponent } from '../enrol/enrol.component';
import { NewEnrolComponent } from './new-enrol/new-enrol.component';
import { EditEnrolComponent } from './edit-enrol/edit-enrol.component';


@NgModule({
  declarations: [
    EnrolComponent,
    NewEnrolComponent,
    EditEnrolComponent
  ],
  imports: [
    CommonModule,
    EnrolRoutingModule
  ]
})
export class EnrolModule { }
