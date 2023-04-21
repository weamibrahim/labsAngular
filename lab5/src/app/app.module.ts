import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentsDetailsComponent } from './components/students-details/students-details.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { AddNewStudentComponent } from './components/add-new-student/add-new-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsDetailsComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    AddNewStudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,ReactiveFormsModule
    ,FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
