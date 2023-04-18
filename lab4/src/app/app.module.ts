import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorComponent } from './Routing/error/error.component';
import { StudentsComponent } from './Routing/students/students.component';
import { StudentDetailsComponent } from './Routing/student-details/student-details.component';
import { RegistrationComponent } from './Routing/registration/registration.component';
import { HeaderComponent } from './Routing/header/header.component';
import { FooterComponent } from './Routing/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RecursiveAstVisitor } from '@angular/compiler';



let routes:Routes = [
  {path:"", component:RegistrationComponent},
  {path:"Students", component:StudentsComponent},
  {path:"Students/:id", component:StudentDetailsComponent},
 
  {path:"**", component:ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    StudentsComponent,
    StudentDetailsComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule,
    
  RouterModule.forRoot(routes)
  ,ReactiveFormsModule


    // FormsModule,
  // ReactiveFormsModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
