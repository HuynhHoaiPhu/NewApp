import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailsComponent } from './authors/author-details.component';
import { AuthorListComponent } from './authors/author-list.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { ThulamformComponent } from './thulamform/thulamform.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormStudentComponent } from './form-student/form-student.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProgressbarComponent,
    AuthorsComponent,
    AuthorDetailsComponent,
    AuthorListComponent,
    AboutComponent,
    FormComponent,
    ThulamformComponent,
    StudentsComponent,
    DashboardComponent,
    FormStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//De chay Two way binding can import FormsModule
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
         
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//Typescript Module