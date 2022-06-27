import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AuthorListComponent } from './authors/author-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormStudentComponent } from './form-student/form-student.component';
import { FormComponent } from './form/form.component';
import { HelloComponent } from './hello/hello.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { StudentsComponent } from './students/students.component';
import { ThulamformComponent } from './thulamform/thulamform.component';

const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'progressbar', component: ProgressbarComponent},
  {path: 'about', component: AboutComponent},
  {path: 'author', component: AuthorListComponent},
  {path: 'form', component: FormComponent},
  {path: 'thulamform', component: ThulamformComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'formstudent', component: FormStudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
