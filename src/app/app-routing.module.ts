import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

//const routes: Routes = [];
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'inicio' ,pathMatch: 'prefix' },
      {
        path: 'inicio',
        loadChildren: () =>
          import('./students/students.module').then(m => m.StudentsModule)
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
