import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp20232';
  StudentName = '';

  public changeStudentName(){
    this.StudentName = this.StudentName.toLowerCase();
  }
}
