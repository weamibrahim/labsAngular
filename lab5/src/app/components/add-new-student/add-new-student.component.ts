import { Component } from '@angular/core';
import {Router} from "@angular/router"
import { DemoService } from 'src/app/Services/demo.service';
@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent {
  constructor(private myService:DemoService,private router:Router){  }

  Add(name:any,age:any, email:any, phone:any){
    let newstudent = {name, age, email, phone};
    this.myService.AddNewstudent(newstudent).subscribe();
    // go to page student
    this.router.navigate(['/students']);
  }
}
